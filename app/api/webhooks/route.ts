// app/api/webhooks/route.ts
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import prisma from "../../../lib/prisma";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env.local')
  }

  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload)

  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occurred', {
      status: 400
    })
  }

  const eventType = evt.type

  try {
    switch (eventType) {
      case 'user.created':
      case 'user.updated':
        const { id, username, first_name, last_name, image_url } = evt.data
        
        await prisma.user.upsert({
          where: { clerkId: id },
          update: {
            username: username || '',
            name: `${first_name || ''} ${last_name || ''}`.trim(),
            image: image_url,
          },
          create: {
            clerkId: id,
            username: username || '',
            name: `${first_name || ''} ${last_name || ''}`.trim(),
            image: image_url,
            onboarded: false,
          },
        })
        break

      case 'user.deleted':
        const userId = evt.data.id
        await prisma.user.delete({
          where: { clerkId: userId }
        })
        break
    }

    return new Response('', { status: 200 })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new Response('Error processing webhook', { status: 500 })
  }
}
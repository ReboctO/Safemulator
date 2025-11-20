import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { fetchUser } from '@/lib/actions/user.actions'

async function Page() {
  const user = await currentUser()
  if (!user) {
    redirect('/sign-in')
  }

  const userInfo = await fetchUser(user.id)
  
  // If user exists in database, redirect to home
  if (userInfo) {
    redirect('/')
  }

  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='text-3xl font-bold mb-4'>Onboarding</h1>
      <p className='text-gray-600 mb-8'>
        Your account is being set up. Please contact your administrator to complete your profile.
      </p>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-6'>
        <p className='text-sm text-gray-500'>
          User ID: {user.id}
        </p>
        <p className='text-sm text-gray-500'>
          Email: {user.emailAddresses[0]?.emailAddress}
        </p>
      </div>
    </main>
  )
}

export default Page
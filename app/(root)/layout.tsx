import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { fetchUser } from '../../lib/actions/user.actions';

export default async function AppLayout({
  children,
  admin,
  dean,
  student
}: { 
  children: React.ReactNode; 
  admin: React.ReactNode;
  dean: React.ReactNode;
  student: React.ReactNode;
}) {
  const { userId } = await auth();

  // If not authenticated, show landing page (children = page.tsx)
  if (!userId) {
    return <>{children}</>;
  }

  // Fetch user from database
  const user = await fetchUser(userId);

  // If user doesn't exist in DB, redirect to onboarding
  if (!user) {
    redirect('/onboarding');
  }

  // Render content based on user role
  switch (user.role) {
    case 'ADMIN':
      return <>{admin}</>;
    case 'DEAN':
      return <>{dean}</>;
    case 'STUDENT':
    case 'STAFF':
      return <>{student}</>;
    default:
      return <>{children}</>;
  }
}
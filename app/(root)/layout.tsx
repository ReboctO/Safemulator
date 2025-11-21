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
    console.log('🔐 No userId found - showing public landing page');
    return <>{children}</>;
  }

  console.log('👤 Clerk User ID:', userId);

  // Fetch user from database
  const user = await fetchUser(userId);

  // If user doesn't exist in DB, redirect to onboarding
  if (!user) {
    console.log('❌ User not found in database - redirecting to onboarding');
    redirect('/onboarding');
  }

  console.log('✅ User found in database:');
  console.log('   - User ID:', user.id);
  console.log('   - Clerk ID:', user.clerkId);
  console.log('   - Role:', user.role);
  console.log('   - Full user object:', JSON.stringify(user, null, 2));

  // Render content based on user role
  switch (user.role) {
    case 'ADMIN':
      console.log('🚀 Rendering ADMIN route');
      return <>{admin}</>;
    case 'DEAN':
      console.log('🎓 Rendering DEAN route');
      return <>{dean}</>;
    case 'STUDENT':
    case 'STAFF':
      console.log('📚 Rendering STUDENT/STAFF route');
      return <>{student}</>;
    default:
      console.log('❓ Unknown role - showing public landing page');
      return <>{children}</>;
  }
}
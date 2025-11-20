import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { fetchUser } from '@/lib/actions/user.actions';

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});
const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeMulator",
  description: "A Video Game Disaster Drill Simulator",
};

export default async function RootLayout({
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

  // If not authenticated, show landing page
  if (!userId) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased`}>
            {children}
          </body>
        </html>
      </ClerkProvider>
    );
  }

  // Fetch user from database
  const user = await fetchUser(userId);

  // If user doesn't exist in DB, redirect to onboarding
  if (!user) {
    redirect('/onboarding');
  }

  // Render content based on user role
  const renderContent = () => {
    switch (user.role) {
      case 'ADMIN':
        return admin;
      case 'DEAN':
        return dean;
      case 'STUDENT':
        return student;
      case 'STAFF':
        return student;
      default:
        return children;
    }
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased`}>
          {renderContent()}
        </body>
      </html>
    </ClerkProvider>
  );
}
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import DeanProfileForm from "@/components/forms/DeanProfileForm";

export default async function DeanSettingsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await fetchUser(userId);

  if (!user || user.role !== "DEAN") {
    redirect("/");
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Update your personal information
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <DeanProfileForm
          clerkId={user.clerkId}
          initialData={{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image || undefined,
          }}
        />
      </div>
    </div>
  );
}

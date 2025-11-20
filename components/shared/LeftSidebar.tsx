"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import { sidebarLinks } from "../../constants/dean/index";
import { LogOut} from "lucide-react";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          // Don't mutate the original object - create a new route variable
          const actualRoute = link.route === "/profile" 
            ? `${link.route}/${userId}` 
            : link.route;

          // Get the Icon component
          const IconComponent = link.icon;

          return (
            <Link
              href={actualRoute}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500 "}`}
            >
              <IconComponent size={24} className="text-light-1" />
              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton redirectUrl="/sign-in">
            <div className='flex cursor-pointer gap-4 p-4'>
              <LogOut size={24} className="text-light-2" />  {/* Use the LogOut icon */}
              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
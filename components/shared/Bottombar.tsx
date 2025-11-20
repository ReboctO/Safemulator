"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import {useAuth } from "@clerk/nextjs";
import { sidebarLinks } from "../../constants/dean/index";

function Bottombar() {
    const router = useRouter();
    const pathname = usePathname();
    const { userId } = useAuth();

  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
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
              className={`bottombar_link ${isActive && "bg-primary-500 "}`}
            >
              <IconComponent size={24} className="text-light-1" />
               <p className='text-subtle-medium text-light-1 max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;

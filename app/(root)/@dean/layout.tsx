import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "../../global.css";
import LeftSidebar from "../../../components/shared/LeftSidebar";
import Topbar from "../../../components/shared/Topbar";
import Bottombar from "../../../components/shared/Bottombar";
import { Toaster } from "../../../components/ui/toaster";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});
const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export default function DeanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar />
      <main className='flex flex-row'>
        <LeftSidebar />  
        <section className='main-container'>
          <div>{children}</div>
        </section> 
      </main>
      <Bottombar />
      <Toaster />
    </>
  );
}
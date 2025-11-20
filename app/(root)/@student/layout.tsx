import "../../global.css";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});
const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
      </div>
      <Toaster />
    </>
  );
}

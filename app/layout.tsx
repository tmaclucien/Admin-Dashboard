import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucien Admin Dashboard",
  description: "This project is built on nextjs, typescript, shadcn/ui, tailwindcss, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen flex flex-col`}
      >
        <header className="basis-[70px]">
          <Navbar />
        </header>
        
        <main className="flex-1 flex">
          <div className="basis-[200px] bg-blue-500">
            <Sidebar />
          </div>
          <div className="flex-1 bg-yellow-500">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

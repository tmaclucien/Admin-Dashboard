import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";

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
  description:
    "This project is built on nextjs, typescript, shadcn/ui, tailwindcss, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="dashboard-theme "
        >
          <Navbar />
          <main className="flex">
            <div className="hidden md:block h-[100vh] w-[250px]">
              <Sidebar />
            </div>
            <div className="p-5 flex-1">{children}</div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

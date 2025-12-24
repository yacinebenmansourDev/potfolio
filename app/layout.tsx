import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yacine Benmansour | Full-Stack Developer Portfolio",
  description:
    "Discover the portfolio of Yacine Benmansour — a front-end developer passionate about creating modern web and mobile applications using Next.js, Expo, and Supabase. Explore projects that combine clean design, performance, and real-world functionality.",
  icons: {
    icon: "/yacine.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <FloatingDockDemo />
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}

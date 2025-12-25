import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yacine Benmansour | Full-Stack Developer Portfolio",
  description:
    "Discover the portfolio of Yacine Benmansour — a front-end developer passionate about creating modern web and mobile applications using Next.js, Expo, and Supabase.",
  icons: {
    icon: "/yacine.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${inter.variable}
          font-sans
          antialiased
          bg-black
          text-neutral-900
          dark:text-neutral-100
        `}
      >
        <FloatingDockDemo />
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}

"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/yacinebenmansourDev",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/yacine-benmansour-726668390/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/yacin3_benmansour/",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.youtube.com/channel/UCxWM9rsI1S4OMz_dLJ9hj0Q",
    },
  ];
  return (
    <div className="flex items-center justify-center h-auto w-auto right-5 fixed bottom-5 z-50 ">
      <FloatingDock items={links} />
    </div>
  );
}

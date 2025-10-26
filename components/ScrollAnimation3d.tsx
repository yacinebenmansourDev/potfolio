"use client";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ScrollAnimation3d() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-6">
              Boutique Escale is a complete e-commerce platform combining a
              modern website and a mobile app for seamless shopping. Customers
              can browse collections, view products in detail, and place orders
              with ease, while the platform ensures smooth performance across
              devices.
            </p>
            <h1 className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-black dark:text-white">
              Boutique Escale
            </h1>
          </>
        }
      >
        {/* Desktop Image */}
        <Image
          src={`/escale-page.JPG`}
          alt="hero desktop"
          height={720}
          width={1400}
          className="hidden md:block mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />

        {/* Mobile Image */}
        <Image
          src={`/escale-mobile.JPG`}
          alt="hero mobile"
          height={720}
          width={720}
          className="block md:hidden mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

"use client";

import { ProfileClass } from "@/lib/types";
import Image from "next/image";
import { motion as m } from "framer-motion";

export const Images = ({ profile }: { profile: ProfileClass }) => {
  return (
    <main className="hidden relative lg:flex">
      <m.div
        animate={{ width: ["100%", 0] }}
        transition={{ duration: 2, delay: 4.4, ease: "anticipate" }}
        className="absolute z-10 top-0 left-0 h-full dark:bg-stone-950 bg-white"
      ></m.div>
      <Image
        className="w-[400px] grayscale aspect-square object-cover"
        alt="image"
        src={profile.images[1] || ""}
        width={1000}
        height={1000}
      />
    </main>
  );
};
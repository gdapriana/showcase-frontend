"use client";
import { ProfileClass } from "@/lib/types";
import { motion as m } from "framer-motion";

export const Footer = ({ profile }: { profile: ProfileClass }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <m.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.1, delay: 4 }} className="relative">
        <m.div
          animate={{ width: ["100%", 0] }}
          transition={{ duration: 3, delay: 4, ease: "anticipate" }}
          className="h-full border-r border-primary bg-white dark:bg-stone-950 border-r-4 bg-primary-foreground absolute left-0 top-0"
        ></m.div>
        <m.div className="flex ml-3 flex-col justify-center items-start">
          <h4 className="font-semibold hover:underline">{profile.phone}</h4>
          <h4 className="font-semibold hover:underline">{profile.email}</h4>
        </m.div>
      </m.div>
    </div>
  );
};

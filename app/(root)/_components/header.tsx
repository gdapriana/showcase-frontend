"use client";

import { ProfileClass } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { motion as m } from "framer-motion";

export const Header = ({ profile }: { profile: ProfileClass }) => {
  return (
    <header className="flex gap-2 flex-col justify-center items-start">
      <m.h1
        animate={{ opacity: [0, 1], filter: ["blur(1000px)", "blur(0)"] }}
        transition={{ duration: 2, ease: "anticipate" }}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        Hi, I'm <span className="text-teal-300">{profile.name}</span>
      </m.h1>
      <m.p
        animate={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 2, delay: 2, ease: "anticipate" }}
        className="text-muted-foreground"
      >
        {profile.highlight}
      </m.p>
      <m.div
        animate={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 2, delay: 2.4, ease: "anticipate" }}
        className="flex flex-wrap justify-start items-center mt-4 gap-4"
      >
        <Button size="lg" className="rounded-full md:py-8 text-base">
          Got a Project?
        </Button>
        <Button variant="outline" size="lg" className="rounded-full md:py-8 text-base">
          Hire Me!
        </Button>
      </m.div>
    </header>
  );
};

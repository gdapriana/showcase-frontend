"use client";

import { ProfileClass } from "@/lib/types";
import { Header } from "@/app/_components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion as m } from "framer-motion";

export const AboutHeader = ({ profile }: { profile: ProfileClass }) => {
  return (
    <main className="grid gap-8 grid-cols-1 grid-rows-[auto_auto_auto] md:grid-cols-[1fr_1.5fr] md:grid-rows-[auto_auto]">
      <m.div
        animate={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "anticipate" }}
        className="flex flex-col justify-center items-start gap-4"
      >
        <Header title="- NICE TO MEET YOU" headline={profile.name} />
        <h3 className="font-semibold text-muted-foreground">{profile.highlight}</h3>
        <Button asChild className="rounded-full mt-4">
          <Link href={profile.cv}>Download my CV</Link>
        </Button>
      </m.div>
      <m.div
        animate={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "anticipate" }}
        className="flex flex-col justify-start gap-4 items-stretch"
      >
        <p className="text-muted-foreground leading-7">{profile.about}</p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center items-start">
            <h1 className="underline text-muted-foreground whitespace-nowrap">AGE</h1>
            <h1 className="font-bold whitespace-nowrap">{profile.age}</h1>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="underline text-muted-foreground whitespace-nowrap">MAIL</h1>
            <h1 className="font-bold whitespace-nowrap">{profile.email}</h1>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="underline whitespace-nowrap text-muted-foreground">CALL</h1>
            <h1 className="font-bold whitespace-nowrap">{profile.phone}</h1>
          </div>
        </div>
      </m.div>
      <div className="md:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <m.div
          animate={{ scale: [0, "100%"], borderRadius: [100, 10] }}
          transition={{ duration: 1, ease: "anticipate" }}
          className="flex scale-0 flex-col bg-teal-400 p-8 rounded-lg justify-center items-center"
        >
          <h1 className="font-bold text-xl">10+</h1>
          <p className="text-muted-foreground text-sm">EXPERIENCES</p>
        </m.div>
        <m.div
          animate={{ scale: [0, "100%"], borderRadius: [100, 10] }}
          transition={{ duration: 1, delay: 0.2, ease: "anticipate" }}
          className="flex flex-col scale-0 bg-rose-400 p-8 rounded-lg justify-center items-center"
        >
          <h1 className="font-bold text-xl">10+</h1>
          <p className="text-muted-foreground text-sm">EXPERIENCES</p>
        </m.div>
        <m.div
          animate={{ scale: [0, "100%"], borderRadius: [100, 10] }}
          transition={{ duration: 1, delay: 0.4, ease: "anticipate" }}
          className="flex flex-col scale-0 bg-fuchsia-400 p-8 rounded-lg justify-center items-center"
        >
          <h1 className="font-bold text-xl">10+</h1>
          <p className="text-muted-foreground text-sm">EXPERIENCES</p>
        </m.div>
      </div>
    </main>
  );
};

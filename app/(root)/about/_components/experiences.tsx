"use client";
import { Experience } from "@/lib/types";
import { Header } from "@/app/_components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import moment from "moment/moment";
import { motion as m } from "framer-motion";

export const Experiences = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <main className="flex flex-col justify-start items-stretch">
      <Header headline="Everything About Me !" title="- EXERIENCES" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {experiences.map((experience: Experience, index: number) => {
          return (
            <m.article
              animate={{ opacity: [0, 1], y: [100, 0] }}
              transition={{ duration: 1, delay: index * 0.2, ease: "anticipate" }}
              key={index}
              className="border gap-y-1 gap-x-3 grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] rounded-xl p-6"
            >
              <div className="flex justify-center items-center">
                <Avatar>
                  <AvatarFallback>{experience.company.name.charAt(0)}</AvatarFallback>
                  <AvatarImage src={experience.company.logo || ""} />
                </Avatar>
              </div>
              <div className="flex justify-start items-center">
                <h1 className="font-bold leading-5 text-lg">{experience.name}</h1>
              </div>
              <div className="row-span-2"></div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <Badge>{experience?.type}</Badge>
                <p className="text-muted-foreground text-sm">{experience.description}</p>
              </div>
              <div className="flex justify-end items-center">
                <h3 className="font-bold text-sm">
                  {moment(experience.from).format("YYYY MMM")},{" "}
                  {!experience.until ? <span>Now</span> : moment(experience.until).format("YYYY MMM")}
                </h3>
              </div>
            </m.article>
          );
        })}
      </div>
    </main>
  );
};

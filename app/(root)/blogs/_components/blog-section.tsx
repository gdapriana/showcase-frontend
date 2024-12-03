"use client";

import { Blog } from "@/lib/types";
import { Calendar } from "lucide-react";
import Link from "next/link";
import moment from "moment";
import { motion as m } from "framer-motion";

export const BlogSection = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-full md:w-9/12 gap-4 md:flex-1 md:grow md:basis-0 md:overflow-auto flex flex-col justify-start items-stretch">
      {blogs.map((blog: Blog, index: number) => {
        return (
          <Link
            href={`/blogs/${blog.slug}`}
            key={index}
            className="border relative gap-4 p-8 flex flex-col justify-start items-stretch"
          >
            <m.div
              animate={{ width: ["100%", "2%"] }}
              transition={{ duration: 2, ease: "anticipate", delay: index * 0.2 }}
              className="absolute top-0 left-0 bg-primary h-full"
            ></m.div>
            <div className="flex text-lg gap-2 justify-start items-center text-muted-foreground">
              <Calendar />
              <p>{moment(blog.createdAt).fromNow()}</p>
            </div>
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">{blog.title}</h4>
            <p className="text-muted-foreground text-sm line-clamp-3">{blog.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

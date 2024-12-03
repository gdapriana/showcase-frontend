import { Button } from "@/components/ui/button";
import { Blog } from "@/lib/types";
import { Calendar, TimerIcon } from "lucide-react";
import moment from "moment";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const blogs: Blog[] = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/blogs`)
    .then((data) => data.json())
    .then((data) => data.blogs);

  const blog: Blog | undefined = blogs.find((data) => data.slug === slug);
  if (!blog) return notFound();
  return (
    <main className="w-full gap-14 max-w-3xl py-20 flex flex-col justify-start items-stretch">
      <header className="flex gap-4 justify-start flex-col items-stretch">
        <Image src={blog.cover} alt="cover" width={1920} height={1080} />
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{blog.title}</h1>
        <div className="flex justify-start items-center gap-4">
          <Button className="rounded-full" variant="secondary">
            <TimerIcon />
            {blog.readingTime} Minute/s Read
          </Button>
          <Button className="rounded-full" variant="secondary">
            <Calendar />
            {moment(blog.createdAt).format("YYYY MMM D")}
          </Button>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground"> {blog.description} </p>
        <article className="prose border-l lg:prose-sm" dangerouslySetInnerHTML={{ __html: blog.body }}></article>
      </header>
    </main>
  );
}

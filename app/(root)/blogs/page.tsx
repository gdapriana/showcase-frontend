import { Blog } from "@/lib/types"
import { Header } from "@/app/_components/header"
import Link from "next/link"
import moment from "moment"
import { Calendar } from "lucide-react"
import { BlogSection } from "./_components/blog-section"
export default async function Page() {

  const blogs: Blog[] = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/blogs`)
    .then(data => data.json())
    .then(data => data.blogs)

  return (
    <main className="w-full max-w-3xl md:h-screen gap-16 flex flex-col md:flex-row">
      <div className="w-full md:w-3/12">
        <Header title="- BLOG" headline="My Blog & News" />
      </div>
      <BlogSection blogs={blogs} />
    </main>
  )
}
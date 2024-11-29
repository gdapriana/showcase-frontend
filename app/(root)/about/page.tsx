import { Experience } from "@/lib/types";
import { Experiences } from "@/app/(root)/about/_components/experiences";

export default async function Page() {
  const experiences: Experience[] = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/experiences`)
    .then((res) => res.json())
    .then((data) => data.experiences);

  return (
    <main className="w-full max-w-3xl h-screen flex flex-col justify-start items-stretch">
      <div className=""></div>
      <Experiences experiences={experiences} />
    </main>
  );
}

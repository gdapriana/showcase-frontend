import { Experience, ProfileClass } from "@/lib/types";
import { Experiences } from "@/app/(root)/about/_components/experiences";
import { AboutHeader } from "@/app/(root)/about/_components/header";

export default async function Page() {
  const experiences: Experience[] = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/experiences`)
    .then((res) => res.json())
    .then((data) => data.experiences);

  const profile: ProfileClass = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/profile`)
    .then((res) => res.json())
    .then((data) => data.profile);

  return (
    <main className="w-full gap-14 max-w-3xl py-20 flex flex-col justify-start items-stretch">
      <AboutHeader profile={profile} />
      <Experiences experiences={experiences} />
    </main>
  );
}

import {ProfileClass} from "@/lib/types";
import {Button} from "@/components/ui/button";
import {Footer} from "@/app/(root)/_components/footer";
import {Header} from "@/app/(root)/_components/header";

export default async function Home() {
  const profile: ProfileClass = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/profile`)
    .then((response: Response) => response.json())
    .then((data) => data.profile);

  return (
    <main className="max-w-4xl h-screen justify-center items-center flex w-full">
      <div className="grid gap-20 grid-cols-1 grid-rows-[auto_auto] lg:grid-rows-[auto_auto] lg:grid-cols-[1fr_auto] w-full">
        <Header profile={profile} />
        <div className="hidden lg:flex lg:row-span-2"></div>
        <Footer profile={profile} />
      </div>
    </main>
  );
}

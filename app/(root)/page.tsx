import { ProfileClass } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Footer } from "@/app/(root)/_components/footer";
import { Header } from "@/app/(root)/_components/header";
import { Images } from "@/app/(root)/_components/image";

export default async function Home() {
  const profile: ProfileClass = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/profile`)
    .then((response: Response) => response.json())
    .then((data) => data.profile);

  return (
    <main className="max-w-4xl h-screen justify-center items-center flex w-full">
      <div className="w-full flex justify-center items-center gap-20">
        <Header profile={profile} />
        <Images profile={profile} />
      </div>
    </main>
  );
}

import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/_components/sidebar-app";
import { ModeToggle } from "@/app/_components/dark-toggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="relative w-full h-screen">
        <div className="absolute z-10 left-0 top-0 m-4">
          <SidebarTrigger />
        </div>
        <div className="absolute right-0 z-10 top-0 m-4">
          <ModeToggle />
        </div>
        <div className="grow basis-0 overflow-auto flex flex-col justify-start items-center w-full h-full px-4 py-28">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}

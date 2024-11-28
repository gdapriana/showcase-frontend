import {BookImage, BriefcaseBusiness, HandPlatter, Home, SquareUserRound, Wand} from "lucide-react"


import {
  Sidebar,
  SidebarContent, SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {ProfileClass} from "@/lib/types";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Wand,
  },
  {
    title: "Services",
    url: "/services",
    icon: HandPlatter,
  },
  {
    title: "Works",
    url: "/works",
    icon: BriefcaseBusiness,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: BookImage,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: SquareUserRound,
  }
]

export async function AppSidebar() {

  const profile: ProfileClass = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/profile`)
    .then(res => res.json())
    .then(data => data.profile)


  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex py-10 justify-center flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-4">
            <Avatar>
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
              <AvatarImage src={profile.profile}/>
            </Avatar>
            <h4 className="scroll-m-20 text-base font-semibold tracking-tight">{profile.name}</h4>
          </div>
        </div>
        <i data-lucide="menu"></i>
      </SidebarFooter>
    </Sidebar>
  )
}

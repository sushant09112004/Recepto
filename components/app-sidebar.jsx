import * as React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { House, ChartPie, Settings } from "lucide-react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Main",
      url: "#",
      items: [
        {
          title: "Leads",
          url: "/leads",
          icon: <House className="h-4 w-4" />,
        },
        {
          title: "Analytics",
          url: "/analytics",
          icon: <ChartPie className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "More",
      url: "#",
      items: [
        {
          title: "Logout",
          url: "/",
          icon: <Settings className="h-4 w-4" />,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <>
      <Sidebar {...props}>
        {/* <SidebarHeader> */}
          <Image src={Logo} alt="Logo" width={180} />
          <hr className="my-4" />
        {/* </SidebarHeader> */}
        <SidebarContent>
          {/* We create a SidebarGroup for each parent. */}
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>
                          <div className="flex items-center gap-2 ml-3.5">
                            {item.icon}
                            <span>{item.title}</span>
                          </div>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </>
  );
}

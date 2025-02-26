import {
  Bell,
  BookmarkCheck,
  Calendar,
  Home,
  Inbox,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/pages/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Tasks",
    url: "/pages/tasks",
    icon: BookmarkCheck,
  },
  {
    title: "Notifications",
    url: "/pages/notifications",
    icon: Bell,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="h-screen w-64 bg-white shadow-lg">
      <SidebarHeader className="border-b pt-4 pb-4">
        <SidebarMenuButton
          asChild
          className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
        >
          <span className="mr-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 font-semibold text-yellow-600">
              TB
            </div>
            <span>TaskBoard Pro </span>
          </span>
        </SidebarMenuButton>
      </SidebarHeader>

      <SidebarContent className="flex flex-col gap-2 p-2">
        <SidebarMenu>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                >
                  <Link href={item.url}>
                    <Icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="mt-auto border-t p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
            >
              <a href="#">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <a href="#">
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

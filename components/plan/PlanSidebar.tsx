import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Plane } from "lucide-react";
import { sidebarItems } from "@/data/dummy";

const PlanSidebar: React.FC = () => (
  <Sidebar className="border-r border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl">
    <SidebarHeader className="border-b border-white/20 px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25">
          <Plane className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            meridian.ai
          </h2>
          <p className="text-sm text-gray-500">Your travel companion</p>
        </div>
      </div>
    </SidebarHeader>
    <SidebarContent className="px-3 py-4">
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu className="space-y-2">
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={item.isActive}
                  className="rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <a href={item.url} className="flex items-center gap-3 px-4 py-3">
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
);

export default PlanSidebar;

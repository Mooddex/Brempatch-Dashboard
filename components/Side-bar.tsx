import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Inbox, Calendar, Search, Settings, icons, ShoppingCart, Users, DollarSign, Mail, ShoppingBasket, Bell, Info } from "lucide-react";

    const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Products",
    url: "#",
    icon: ShoppingBasket,
  },
  {
    title: "Orders",
    url: "#",
    icon: ShoppingCart,
  },
  
  {
    title: "Clients",
    url: "#",
    icon: Users,
  },
  {
    title: "Sales",
    url: "#",
    icon: DollarSign,
  },
  {
    title: "Messages",
    url: "#",
    icon: Mail,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
    {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
    {
    title: "Help",
    url: "#",
    icon: Info,
  },

]
export default function SideBar(){
  return ( 
    <div>
    <Sidebar collapsible='icon'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
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
    </Sidebar>
 
    </div>
   );
}
 

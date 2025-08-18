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
import { Home, Settings, ShoppingCart, Mail, ShoppingBasket, Bell, Info, Users } from "lucide-react";

    const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Products",
    url: "products",
    icon: ShoppingBasket,
  },
  {
    title: "Orders",
    url: "orders",
    icon: ShoppingCart,
  },
  
  {
    title: "Clients",
    url: "clients",
    icon: Users,
  },

  {
    title: "Messages",
    url: "messages",
    icon: Mail,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
    {
    title: "Notifications",
    url: "notifications",
    icon: Bell,
  },
    {
    title: "Help",
    url: "help",
    icon: Info,
  },

]
export default function SideBar(){
  return ( 
    <div>
    <Sidebar collapsible='icon'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
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
 

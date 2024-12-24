import React,{useState} from 'react'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
 
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
export default function SidebarChat() {
  const [chatHistory, setChatHistory] = useState([
      { id: 1, title: 'Previous Chat 1', timestamp: '2 days ago' },
      { id: 2, title: 'Previous Chat 2', timestamp: '5 days ago' },
  ]);
  return (
    <SidebarProvider className ="w-auto border-r  ">
        <Sidebar>
            <SidebarContent className="pt-16">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-lg">History</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          {chatHistory.map((item) => (
                            <SidebarMenuItem key={item.id}>
                              <SidebarMenuButton asChild>
                                  <div className="text-[18px]">{item?.title}</div>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
        <main>
            <SidebarTrigger className="bg-gray-300"/>
        </main>
    </SidebarProvider>
  )
}

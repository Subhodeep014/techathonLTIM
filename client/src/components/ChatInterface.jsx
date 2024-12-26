import React, { useRef, useState } from "react";
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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Send, PaperclipIcon, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import SidebarChat from "./SidebarChat";

const ChatInterface = () => {
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Previous Chat 1", timestamp: "2 days ago" },
    { id: 2, title: "Previous Chat 2", timestamp: "5 days ago" },
  ]);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "This is a sample response from the chatbot.",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle CSV file upload here
      console.log("File uploaded:", file.name);
    }
  };

  return (
    <div className="flex bg-gray-100 overflow-hidden h-screen pt-16 z-10">
      {/* Sidebar */}
      <SidebarChat />

      {/* <SidebarProvider className="border-r w-auto">
        <Sidebar>
          <SidebarContent className="pt-16">
            <SidebarGroup>
              <SidebarGroupLabel className="text-3xl text-black mb-10 pt-16">
                History
              </SidebarGroupLabel>
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
          <SidebarTrigger className="bg-gray-300 z-0 absolute"/>
        </main>
      </SidebarProvider> */}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-y-hidden">
        {/* Chat Messages */}
        <Card className="flex-1 m-4 overflow-y-hidden">
          <ScrollArea className="h-full">
            <CardContent className="p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white text-xs md:text-md"
                        : "bg-gray-100 text-xs md:text-md"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </CardContent>
          </ScrollArea>
        </Card>

        {/* Input Area */}
        <div className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <div>
              <Button
                type="button"
                onClick={handleFileInputClick}
                className="p-2 bg-gray-100 hover:bg-gray-300 rounded cursor-pointer"
              >
                <PaperclipIcon className="w-6 h-6 text-gray-500" />
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
              ></input>
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

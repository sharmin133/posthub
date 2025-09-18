"use client";

import { ReactNode, useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row ">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={() => setIsOpen(!isOpen)}
        isMobileOpen={isMobileOpen}
        toggleMobile={() => setIsMobileOpen(!isMobileOpen)}
      />

     <main
  className={`flex-1 p-6 transition-all duration-300 
    ${isOpen ? "md:ml-[220px]" : "md:ml-[60px]"}`
  }
>
  {children}
</main>
    </div>
  );
}

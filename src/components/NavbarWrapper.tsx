
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";

interface NavbarWrapperProps {
  children: ReactNode;
}

export default function NavbarWrapper({ children }: NavbarWrapperProps) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  );
}

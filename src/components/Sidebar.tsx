"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi"; // React Icon import

interface SidebarProps {
  isOpen: boolean; // desktop sidebar state
  toggleSidebar: () => void;
  isMobileOpen: boolean; // mobile overlay state
  toggleMobile: () => void;
}

export default function Sidebar({
  isOpen,
  toggleSidebar,
  isMobileOpen,
  toggleMobile,
}: SidebarProps) {
  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Posts", href: "/dashboard/posts" },
    { name: "Users", href: "/dashboard/users" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ width: 60 }}
        animate={{ width: isOpen ? 220 : 60 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex bg-purple-100 text-orange-600 shadow-lg h-screen p-4 flex-col fixed top-0 left-0 z-50 mt-20"
      >
        {/* Toggle Button */}
        <button
          className="mb-8 bg-purple-400 rounded p-1 text-white hover:bg-purple-900 transition"
          onClick={toggleSidebar}
        >
          {isOpen ? "←" : "→"}
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-medium whitespace-nowrap hover:text-purple-900 transition"
              >
                {isOpen ? link.name : link.name[0]}
              </Link>
            </li>
          ))}
        </ul>
      </motion.aside>

      {/* Mobile Top-left Menu Icon */}
      <div className="fixed top-24 left-4 md:hidden z-50">
        <button
          className="w-12 h-12 text-purple-700 bg-purple-200 shadow rounded flex items-center justify-center hover:bg-purple-300 transition"
          onClick={toggleMobile}
          title="Menu"
        >
          <HiMenu size={24} />
        </button>
      </div>

      {/* Mobile Overlay Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 z-50 bg-purple-100 text-orange-600 flex flex-col md:hidden shadow-lg"
          >
            {/* Close Button */}
            <button
              className="self-end mb-6 bg-orange-500 rounded p-3 text-white hover:bg-purple-500 transition"
              onClick={toggleMobile}
            >
              ✕
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-6 text-lg mt-10">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-semibold hover:text-purple-900 transition"
                    onClick={toggleMobile}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { MdDashboard, MdArticle, MdPeople } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  isMobileOpen: boolean;
  toggleMobile: () => void;
}

export default function Sidebar({
  isOpen,
  toggleSidebar,
  isMobileOpen,
  toggleMobile,
}: SidebarProps) {
  const links = [
    { name: "Dashboard", href: "/dashboard", icon: <MdDashboard size={20} /> },
    { name: "Posts", href: "/dashboard/posts", icon: <MdArticle size={20} /> },
    { name: "Users", href: "/dashboard/users", icon: <MdPeople size={20} /> },
  ];

  return (
    <>
      {/* desktop sidebar */}
      <motion.aside
        initial={{ width: 60 }}
        animate={{ width: isOpen ? 220 : 60 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex bg-purple-200 text-purple-700 shadow-lg h-screen p-4 flex-col fixed top-0 left-0 z-50 mt-20"
      >
        {/* toggle button */}
        <button
          className="mb-8 bg-purple-400 rounded p-2 text-white hover:bg-purple-900 transition flex items-center justify-center"
          onClick={toggleSidebar}
        >
          {isOpen ? <HiChevronLeft size={20} /> : <HiChevronRight size={20} />}
        </button>

        {/* sidebar links */}
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-2 font-medium whitespace-nowrap hover:text-purple-900 transition"
              >
                {link.icon}
                {isOpen ? link.name : null}
              </Link>
            </li>
          ))}
        </ul>
      </motion.aside>

      {/* mobile menu icon */}
      <div className="fixed top-24 left-4 md:hidden z-50">
        <button
          className="w-12 h-12 text-purple-700 bg-purple-200 shadow rounded flex items-center justify-center hover:bg-purple-300 transition"
          onClick={toggleMobile}
          title="Menu"
        >
          <HiMenu size={26} />
        </button>
      </div>

      {/* mobile overlay sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 h-64 w-64 bg-purple-200 text-purple-700 flex flex-col md:hidden shadow-lg z-50 p-6"
          >
            {/* close button */}
            <button
              className="self-end mb-6 bg-orange-500 rounded p-2 text-white hover:bg-purple-500 transition"
              onClick={toggleMobile}
            >
              <HiX size={22} />
            </button>

            {/* mobile links */}
            <ul className="flex flex-col gap-6 text-lg mt-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 font-semibold hover:text-purple-900 transition"
                    onClick={toggleMobile}
                  >
                    {link.icon}
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

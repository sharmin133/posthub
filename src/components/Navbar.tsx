"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FF8000] text-white md:p-5 py-5 fixed w-full top-0 z-50 shadow">
      <div className="flex justify-between items-center px-8">
        <div className="text-xl font-bold text-white">
          <Link href="/">PostHub</Link>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className="hover:text-[#4C1F7A] font-semibold">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-[#4C1F7A] font-semibold">
            Dashboard
          </Link>
          {session && (
            <Link href="/profile" className="hover:text-[#4C1F7A] font-semibold">
              Profile
            </Link>
          )}
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="bg-[#4C1F7A] text-white px-4 py-2 rounded font-semibold hover:bg-purple-950 transition"
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className="bg-white border-purple-900 border-2 text-[#4C1F7A] px-4 py-1 rounded font-semibold hover:brightness-90 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* mobile dropdown with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute right-2 mt-2 flex flex-col items-start gap-2 h-auto
              w-48 bg-[#4C1F7A] p-3 rounded-lg text-white shadow-lg z-50"
          >
            <Link
              href="/"
              className="hover:text-[#FF8000]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-[#FF8000]"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            {session && (
              <Link
                href="/profile"
                className="hover:text-[#FF8000]"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
            )}
            {!session ? (
              <button
                onClick={() => {
                  signIn("google");
                  setIsOpen(false);
                }}
                className="inline-flex items-center justify-center w-auto bg-[#FF8000] text-white px-4 py-1 rounded font-semibold hover:brightness-90 transition"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="inline-flex items-center justify-center w-auto bg-white border-purple-900 border-2 text-[#4C1F7A] px-4 py-1 rounded font-semibold hover:brightness-90 transition"
              >
                Logout
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

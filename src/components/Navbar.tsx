"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link href="/">Dashboard</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
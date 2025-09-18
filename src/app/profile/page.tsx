"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p className="text-red-500 mt-20">You are not signed in</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="flex items-center gap-4">
       
        <div>
          <p className="text-lg font-semibold">{session.user?.name}</p>
          <p className="text-gray-600">{session.user?.email}</p>
        </div>
      </div>
    </div>
  );
}

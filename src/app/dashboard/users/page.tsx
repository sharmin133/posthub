"use client";

import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { User } from "@/types/users";
import Modal from "@/components/Modal";

export default function UsersPage() {
  const { data: users, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!users) return <p>No users found</p>;

  return (
    <div className="pt-32 px-4 md:px-8 min-h-screen transition-colors duration-300 
      bg-gradient-to-b from-orange-50 via-white to-purple-50">

      {/*  title */}
      <h1 className="md:text-5xl text-3xl text-center font-bold md:mb-12 mb-6 text-purple-900">
        All Users
      </h1>

      {/* table */}
      <div className="overflow-x-auto rounded-lg shadow-md border border-purple-200 bg-white">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-orange-100 to-purple-100">
              <th className="border border-purple-200 p-3 text-purple-900 font-semibold">
                Name
              </th>
              <th className="border border-purple-200 p-3 text-purple-900 font-semibold">
                Email
              </th>
              <th className="border border-purple-200 p-3 text-purple-900 font-semibold">
                Company
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="cursor-pointer hover:bg-gradient-to-r hover:from-orange-50 hover:to-purple-50"
                onClick={() => setSelectedUser(user)}
              >
                <td className="border border-purple-100 p-3">{user.name}</td>
                <td className="border border-purple-100 p-3">{user.email}</td>
                <td className="border border-purple-100 p-3">
                  {user.company.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal */}
      <Modal isOpen={!!selectedUser} onClose={() => setSelectedUser(null)}>
        {selectedUser && (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">
              {selectedUser.name}
            </h2>

            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>

            <div className="mt-4">
              <strong className="text-purple-900">Company:</strong>
              <p>Name: {selectedUser.company.name}</p>
              <p>CatchPhrase: {selectedUser.company.catchPhrase}</p>
              <p>BS: {selectedUser.company.bs}</p>
            </div>

            <div className="mt-4">
              <strong className="text-purple-900">Address:</strong>
              <p>Suite: {selectedUser.address.suite}</p>
              <p>Street: {selectedUser.address.street}</p>
              <p>City: {selectedUser.address.city}</p>
              <p>Zipcode: {selectedUser.address.zipcode}</p>
              <p>
                Geo: Lat {selectedUser.address.geo.lat}, Lng{" "}
                {selectedUser.address.geo.lng}
              </p>
            </div>

            <button
              className="mt-6 bg-[#4C1F7A] text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { User } from "@/types/users";


export default function UsersPage() {
  const { data: users, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!users) return <p>No users found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedUser(user)}
              >
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-2">{selectedUser.name}</h2>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>

            <div className="mt-2">
              <strong>Company:</strong>
              <p>Name: {selectedUser.company.name}</p>
              <p>CatchPhrase: {selectedUser.company.catchPhrase}</p>
              <p>BS: {selectedUser.company.bs}</p>
            </div>

            <div className="mt-2">
              <strong>Address:</strong>
              <p>Suite: {selectedUser.address.suite}</p>
              <p>Street: {selectedUser.address.street}</p>
              <p>City: {selectedUser.address.city}</p>
              <p>Zipcode: {selectedUser.address.zipcode}</p>
              <p>Geo: Lat {selectedUser.address.geo.lat}, Lng {selectedUser.address.geo.lng}</p>
            </div>

            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

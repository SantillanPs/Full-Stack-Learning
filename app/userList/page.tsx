"use client";

import React, { useState } from "react";
import Link from "next/link";
type userProp = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchedUsers = async () => {
    const response = await fetch("/api/userList", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  const deleteUser = async (id: string) => {
    const response = await fetch(`/api/delete?id=${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchedUsers();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">User List</h1>
      <div className="flex gap-4">
        <button
          onClick={fetchedUsers}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Fetch Users
        </button>
        <Link
          href="/register"
          className="bg-green-500 text-white p-2 rounded-md"
        >
          Register
        </Link>
        <Link href="/login" className="bg-green-500 text-white p-2 rounded-md">
          Login
        </Link>
      </div>
      <ul className="flex flex-col gap-4">
        {users.map((user: userProp) => (
          <li key={user.id}>
            <div>
              <p className="text-lg font-bold">Name: {user.name}</p>
              <p className="text-lg">Email: {user.email}</p>
            </div>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

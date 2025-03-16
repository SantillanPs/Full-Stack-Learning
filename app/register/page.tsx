"use client";

import React, { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Register() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    setMessage(result.message);

    redirect("/login");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-gray-300 rounded-md p-2"
          name="name"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 rounded-md p-2"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-md p-2"
          name="password"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Register
        </button>
        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="bg-green-500 text-white p-2 rounded-md"
          >
            Login
          </Link>
          <Link
            href="/userList"
            className="bg-green-500 text-white p-2 rounded-md"
          >
            User List
          </Link>
        </div>
      </form>
      <p
        className={
          message === "Register successful" ? "text-green-400" : "text-red-400"
        }
      >
        {message}
      </p>
    </div>
  );
}

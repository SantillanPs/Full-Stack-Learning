"use client";

import React, { useState } from "react";

export default function Register() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    setMessage(result.message);
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
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 rounded-md p-2"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-md p-2"
          name="password"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Register
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}

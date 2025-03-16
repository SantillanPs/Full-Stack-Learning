"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/dashboard");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        className="bg-slate-800 p-2 rounded-md"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="bg-slate-800 p-2 rounded-md"
        type="password"
        name="password"
        placeholder="Password"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="bg-blue-800 p-2 rounded-md hover:bg-blue-700 cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;

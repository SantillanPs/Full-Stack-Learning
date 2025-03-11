"use client";

import React, { useState } from "react";

const Form = () => {
  const [res, setRes] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    setRes(result.message);
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        className="bg-slate-800 p-2 rounded-md"
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className="bg-slate-800 p-2 rounded-md"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="bg-slate-800 p-2 rounded-md"
        type="text"
        name="message"
        placeholder="Message"
      />
      <button
        className="bg-slate-800 p-2 rounded-md hover:bg-slate-700"
        type="submit"
      >
        Submit
      </button>

      <p>{res}</p>
    </form>
  );
};

export default Form;

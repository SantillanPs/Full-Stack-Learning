"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const Button = () => {
  const handleSignOut = async () => {
    await signOut();
    redirect("/login");
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-blue-800 p-2 rounded-md hover:bg-blue-700 cursor-pointer"
    >
      Logout
    </button>
  );
};

export default Button;

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import React from "react";
import Button from "../components/logout";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1>Welcome, {session.user?.name}</h1>
        <p>Email: {session.user?.email}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button />
      </div>
    </div>
  );
}

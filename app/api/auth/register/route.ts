import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  console.log(`Name: ${data.name}`);
  console.log(`Email: ${data.email}`);
  console.log(`Password: ${data.password}`);

  return NextResponse.json({ message: "Register successful" }, { status: 200 });
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(`Name: ${data.name}`);
  console.log(`Email: ${data.email}`);
  console.log(`Message: ${data.message}`);
  return NextResponse.json({ message: "Form received!!" });
}

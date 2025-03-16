import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "Missing user ID" }, { status: 400 });
  }

  try {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        message: "User deleted successfully",
        user: {
          id: deletedUser.id,
          name: deletedUser.name,
          email: deletedUser.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to delete user" },
      { status: 500 }
    );
  }
}

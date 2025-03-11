import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>Home</h1>
      <div className="flex gap-4">
        <Link href="/login" className="bg-blue-500 text-white p-2 rounded-md">
          Login
        </Link>
        <Link
          href="/register"
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

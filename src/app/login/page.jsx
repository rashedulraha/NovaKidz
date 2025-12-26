"use client";

import LoginButton from "@/components/Button/LoginButton";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-5 text-center">Login</h2>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Enter your password"
          />
        </div>
        <LoginButton />
      </form>

      <div className="flex items-center justify-between my-5">
        <p>Create a new account</p>
        <Link href={"/register"} className="text-info">
          Register
        </Link>
      </div>
    </div>
  );
}

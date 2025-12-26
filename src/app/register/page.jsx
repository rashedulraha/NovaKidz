"use client";

import RegisterButton from "@/components/Button/RegisterButton";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-5 text-center">Register</h2>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Enter your name"
          />
        </div>

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

        <RegisterButton />
      </form>
      <div className="flex items-center justify-between my-5">
        <p>Already have an account</p>
        <Link href={"/login"} className="text-info">
          Register
        </Link>
      </div>
    </div>
  );
}

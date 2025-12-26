"use client";

import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div>
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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold">
          Login
        </button>
      </form>

      {/*  Create a new account */}
      <div className="flex items-center justify-between my-5">
        <p>Create a new account</p>
        <Link href={"/register"} className="text-info">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

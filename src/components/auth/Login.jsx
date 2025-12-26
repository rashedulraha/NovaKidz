"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import React from "react";

const LoginForm = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userInfo = {
      email,
      password,
    };

    const result = await signIn("credentials", userInfo);
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            name="password"
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

"use client";

import { postUser } from "@/app/aciton/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  // navigate user
  const router = useRouter();
  // Register user
  const handleRegisterUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const UserRegisterInfo = {
      name,
      email,
      password,
    };
    const result = await postUser(UserRegisterInfo);
    if (result.acknowledged) {
      alert("Register successfully , please login");
      router.push("/login");
    }
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleRegisterUser}>
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
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
          Sign Up
        </button>
      </form>

      {/*  already have an account */}
      <div className="flex items-center justify-between my-5">
        <p>Already have an account</p>
        <Link href={"/login"} className="text-info">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;

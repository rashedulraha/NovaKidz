import RegisterForm from "@/components/auth/Register";
import React from "react";

export default function Register() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-5 text-center">Register</h2>
      <RegisterForm />
    </div>
  );
}

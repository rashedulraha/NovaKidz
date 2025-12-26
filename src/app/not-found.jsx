import Link from "next/link";
import React from "react";
import { BiSolidError } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <div className="flex items-center min-h-screen justify-center flex-col space-y-5">
      <BiSolidError size={100} className="text-primary" />
      <h1 className="text-4xl font-bold text-primary">Page not found</h1>
      <Link href={"/"}>
        <button className="btn btn-secondary">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

import Logo from "@/components/layout/logo";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gap-5 flex-col">
      <h1 className="text-2xl font-bold ">Loading....</h1>
      <Logo></Logo>
    </div>
  );
};

export default loading;

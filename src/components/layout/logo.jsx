// import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="font-bold text-lg">
      {/* <Image
        width={50}
        height={40}
        alt="logo nova kidz"
        src={"/public/assets/logo.png"}
      /> */}
      Logo
    </Link>
  );
};

export default Logo;

import Link from "next/link";
import React from "react";
import NavLink from "../Button/NavLink";
import { FaBars, FaCartArrowDown } from "react-icons/fa";
import Logo from "./logo";

const Navbar = () => {
  const navLink = (
    <>
      <div className="flex flex-col items-center space-y-5 md:space-y-0 md:flex-row space-x-6">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/products"}>Products</NavLink>
        <NavLink href={"/blog"}>Blog</NavLink>
        <NavLink href={"/contact"}>Contact</NavLink>
      </div>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars size={21} />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navLink}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link href={"login"} className="btn">
            <FaCartArrowDown />
          </Link>
          <Link href={"login"} className="btn">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

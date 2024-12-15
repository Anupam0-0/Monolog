import React, { useState } from "react";
import Image from "./Image";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-4 pr-6 sm:px-6 md:px-8 lg:px-16 lx:px-32 2xl:px-64
     h-16 md:h-20 flex items-center justify-between ">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="blog logo" w={32} h={32} />
        <span>Monolog.</span>
      </Link>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
        <div
          className="text-4xl flex items-start cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? "x" : "≡"}
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen overflow-y-hidden flex flex-col items-start gap-8 text-4xl justify-start py-16 md:py-20 px-12 absolute top-16  z-50 transition-all ease-in-out duration-500
            ${open ? "right-0 bg-blue-50 bg-opacity-95  " : "-right-full hidden"
          }`}
        >
          <Link to="/" className="group">Home <hr className="w-0 group-hover:w-full opacity-0 group-hover:opacity-95 border-[2.2px] rounded-full border-slate-800 group-hover:border-blue-600 transition-all ease-in-out duration-[450ms]"/></Link>
          <Link to="/" className="group">Trending <hr className="w-0 group-hover:w-full opacity-0 group-hover:opacity-95 border-[2.2px] rounded-full border-slate-800 group-hover:border-blue-600 transition-all ease-in-out duration-[450ms]"/></Link>
          <Link to="/" className="group">Most Popular <hr className="w-0 group-hover:w-full opacity-0 group-hover:opacity-95 border-[2.2px] rounded-full border-slate-800 group-hover:border-blue-600 transition-all ease-in-out duration-[450ms]"/></Link>
          <Link to="/" className="group">About <hr className="w-0 group-hover:w-full opacity-0 group-hover:opacity-95 border-[2.2px] rounded-full border-slate-800 group-hover:border-blue-600 transition-all ease-in-out duration-[450ms]"/></Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home </Link>

        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;

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
    <div className="w-full px-1 h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="blog logo" w={32} h={32} />
        <span>Monolog.</span>
      </Link>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
        <div
          className="text-4xl items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? "x" : "≡"}
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center gap-8 text-lg justify-start py-24 absolute top-16 transition-all ease-in-out duration-1000 ${
            open ? "right-0 bg-opacity-20" : "-right-full"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
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

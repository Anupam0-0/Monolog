import React from "react";
import { Link } from "react-router";
import MainCategories from "../components/MainCategories";
import FeaturePosts from "../components/FeaturePosts";

const Homepage = () => {
  return (
    <div className="">
      {/* BREADcRUMBS */}
      <div className="py-2 flex gap-4">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <span className="text-blue-800">Blog and Articles</span>
      </div>
      {/* INTro */}
      <div className="flex justify-between">
        {/* titles */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          <h1 className="text-3xl py-4 sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold">
            Monolog.  <br />
          </h1>
          <p className="text-gray-500 text-md md:text-xl">
            Welcome to my Blog and Articles page. Here you will find all the
            latest blog posts and articles.{" "}
          </p>
        </div>

        {/* animated button */}
        <Link to="write" className="hidden md:block relative -top-5">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* CATEGORIES  */}
        <MainCategories />


      {/* FEAtured post */}
        <FeaturePosts/>

      {/* posts list */}
    </div>
  );
};

export default Homepage;

import React from "react";
import { Link } from "react-router";

const FeatureList = () => {
  return (
    <div className="py-8 lg:py-12 px-2 md:px-6  flex flex-col lg:flex-row gap-8">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col ">
        {/* image */}
        <img src="/featured1.jpeg" className="rounded-3xl object-cover" />

        {/* details */}
        <div className="flex items-center gap-4 pt-4">
          <h1 className="font-semibold lg: text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold py-2"
        >
          How to design a website from scratch
        </Link>
      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="/featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
            alt="photo"
          />
          {/* details n title  */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base my-2 ">
              <h1 className="font-semibold text-sm">02.</h1>
              <Link to="/test" className="text-blue-800 text-sm">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link to='/test' className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magnam.
            </Link>
          </div>

        </div>


        {/* third  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="/featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
            alt="photo"
          />
          {/* details n title  */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base my-2 ">
              <h1 className="font-semibold text-sm">02.</h1>
              <Link to="/test" className="text-blue-800 text-sm">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link to='/test' className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
            Chipi Chipi Chapa Chapa <br/> Rubi Rubi Raba Raba
            </Link>
          </div>

        </div>


        {/* fourth  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="/featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
            alt="photo"
          />
          {/* details n title  */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base my-2 ">
              <h1 className="font-semibold text-sm">02.</h1>
              <Link to="/test" className="text-blue-800 text-sm">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link to='/test' className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureList;

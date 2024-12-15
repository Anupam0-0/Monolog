import React from "react";
import { Link } from "react-router";
import Image from "./Image";


const PostListItem = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" w='735' alt="" />
        {/* image optimization at 1:23:00 */}
      </div>

      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          error!
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
        </div>
        
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quis quos delectus asperiores excepturi voluptatem minus cumque ab dolores eligendi?</p>
        <Link to='/test' className='underline text-blue-800 text-sm'>Read more...</Link>
      </div>
    </div>
  );
};

export default PostListItem;

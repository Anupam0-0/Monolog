import React from "react";
import PostList from "../components/PostLists";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, isSetOpen] = React.useState(false);

  return (
    <div>
      <div className=" py-4 pb-12">
        <h1 className="py-4 text-5xl font-medium  bg-transparent bg-clip-text text-slate-950">
          Development Blog
        </h1>
        <button
          onClick={() => isSetOpen(!open)}
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-3 rounded-2xl md:hidden"
        >
          {open ? "Close" : "Filter"}
        </button>
      </div>

      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
          </div>
      </div>
    </div>
  );
};

export default PostListPage;

import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useState } from "react";

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="">
        <h1 className="mb-8 text-2xl">dynamic blog</h1>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-blue-800 text-sm text-white px-4 py-2 mb-4 md:hidden"
        >
          {open ? "Close" : "Filter or Search"}
        </button>
        {open && (
          <div className="md:hidden">
            <SideMenu />
          </div>
        )}
        <div className="flex gap-8">
          <div className="">
            <PostList />
          </div>
          <div className="hidden md:block">
            <SideMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostListPage;

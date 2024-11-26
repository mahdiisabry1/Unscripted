import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  return (
    <>
      <div className="px-4 h-max ticky top-8">
        <Search />
        <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="newest"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
            />
            Newest
          </label>
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="trending"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
            />
            Trending
          </label>
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="oldest"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
            />
            Oldest
          </label>
          <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="popular"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
            />
            Most Popular
          </label>
        </div>
        <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
        <div className="flex flex-col gap-2 text-sm">
          <Link className="underline" to="/posts">
            All
          </Link>
          <Link className="underline" to="/posts?cat=world">
            Geopolitics
          </Link>
          <Link className="underline" to="/posts?cat=technology">
            Technology
          </Link>
          <Link className="underline" to="/posts?cat=sports">
            Sports
          </Link>
          <Link className="underline" to="/posts?cat=cybersecurity">
            Cybersecurity
          </Link>
          <Link className="underline" to="/posts?cat=lifestyle">
            Lifestyle
          </Link>
          <Link className="underline" to="/posts?cat=religion">
            Religion
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideMenu;

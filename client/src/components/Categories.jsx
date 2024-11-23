import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="hidden md:flex h-10 w-full mt-5 mb-5 p-3 items-center justify-center gap-8 border-t-2 border-b-2">
        {/* Categories */}
        <div className="flex-1 flex items-center justify-start md:gap-4 lg:gap-10 xl:gap-16">
          <Link to="/posts" className="underline">
            All
          </Link>
          <Link to="/posts?cat=world" className="hover:underline">
            Geopolitics
          </Link>
          <Link to="/posts?cat=technology" className="hover:underline">
            Technology
          </Link>
          <Link to="/posts?cat=politics" className="hover:underline">
            Sports
          </Link>
          <Link to="/posts?cat=lifestyle" className="hover:underline">
            Cybersecurity
          </Link>
          <Link to="/posts?cat=science" className="hover:underline">
            Lifestyle
          </Link>
          <Link to="/posts?cat=religion" className="hover:underline">
            Religion
          </Link>
        </div>
        <span className="text-xl font-medium">|</span>
        {/* Search */}
        <div className="">
          <input
            placeholder="Search..."
            className="input w-56 transition-all focus:w-64 outline-none"
            name="search"
            type="search"
          />
        </div>
      </div>
    </>
  );
};

export default Categories;

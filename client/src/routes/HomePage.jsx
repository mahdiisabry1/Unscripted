import AdBanner from "../components/AdBanner";
import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <AdBanner />
      {/* BreadCrumbs */}
      <div className="mt-4">
        <span className="text-slate-800">Blogs and Articles</span>
      </div>
      {/*Introduction */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Investigate, Write, Share: The Path of a Private Blogger
          </h1>
          <p className="mt-8 text-base md:text-xl">
            Exploring Geopolitics, Cybersecurity, and Beyond
          </p>
        </div>
        <Link to="/write" className="hidden md:block relative">
          <button className="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100">
            Start Writing
          </button>
        </Link>
      </div>
      {/* Category section */}
      <Categories />
      {/* Featured */}
      <FeaturedPosts />
      {/* PostLists */}
    </>
  );
};

export default Homepage;

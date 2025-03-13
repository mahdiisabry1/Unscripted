import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";
import AdBanner from "../components/AdBanner";
import { useEffect, useState } from "react";

const Homepage = () => {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user has already closed the popup
    const hasClosedPopup = localStorage.getItem("hasClosedPopup");

    // Only show the popup if the user hasn't closed it before
    if (!hasClosedPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // Show the popup after 5 seconds

      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, []);
  const closePopup = () => {
    // Set the flag in local storage to indicate the user has closed the popup
    localStorage.setItem("hasClosedPopup", "true");
    setShowPopup(false);
  };

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
            Exploring Geopolitics, Technology, and Beyond
          </p>
        </div>
      </div>
      {/* Category section */}
      <Categories />
      {/* Featured */}
      <div className="border-t-4 border-b-2 mb-3 border-neutral-950">
        <h1 className="my-1 text-2xl text-gray-700">Trending News</h1>
      </div>
      <FeaturedPosts />
      {/* PostLists */}
      <div className="border-t-4 border-b-2 mb-3 border-neutral-950">
        <h1 className="my-1 text-2xl text-gray-700">Latest News</h1>
      </div>
      <div className="grid grid-cols-[1fr] md:grid-cols-[3fr_1fr] mt-6 mb-6">
        <PostList />
        <div className="hidden md:block">AdBanner</div>
      </div>

      {/* Popup Ad */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative animate-fadeIn">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4">NOTE!</h2>
            <p>
              The Backend is running Through a Tunnel for updates. Not yet
              deployed to the Surface Web.
            </p>
            <a
              href="https://github.com/mahdiisabry1/Unscripted"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              target="blank"
            >
              Learn More
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;

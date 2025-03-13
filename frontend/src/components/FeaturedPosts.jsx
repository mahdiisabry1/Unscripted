import Images from "./Images";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <>
      <div className="mt-6 mb-6 w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] lg:grid-cols-[1fr_2fr_1fr] gap-2">
        <div className="hidden md:grid grid-rows-2 gap-1 h-full">
          <div className="relative group aspect-video">
            <Images
              src="default-image.jpg"
              className="object-cover w-full h-full absolute"
              alt="The-Breaking0Image"
            />
            <div className="absolute bottom-0 p-4">
              <Link
                to="/test"
                className="text-white font-extrabold md:text-lg text-2xl cursor-pointer hover:underline mb-1"
              >
                Lorem ipsum dolor sit ndjha.
              </Link>
              <div className="relative font-semibold flex gap-2 items-center mt-3">
                <Link
                  to=""
                  className="text-slate-950 bg-red-700 py-1 px-2 rounded text-xs"
                >
                  Politics
                </Link>
                <span className="text-white">|</span>
                <span className="text-slate-950 bg-amber-400 py-1 px-2 rounded text-xs">
                  2 days ago
                </span>
              </div>
              <p className="md:hidden lg:block lg:text-justify text-slate-200 text-sm mt-3 max-h-0 font-extrabold overflow-hidden group-hover:max-h-40 transition-all duration-700">
                This is a small description that appears on hover, pushing
                everything upwards.
              </p>
            </div>
          </div>
          <div className="relative group aspect-video">
            <Images
              src="default-image.jpg"
              className="object-cover w-full h-full"
              alt="The-Breaking0Image"
            />
            <div className="absolute bottom-0 p-4">
              <Link
                to="/test"
                className="text-white font-extrabold md:text-lg text-2xl cursor-pointer hover:underline mb-1"
              >
                Lorem ipsum dolor sit ndjha.
              </Link>
              <div className="relative font-semibold flex gap-2 items-center mt-3">
                <Link
                  to=""
                  className="text-slate-950 bg-red-700 py-1 px-2 rounded text-xs"
                >
                  Politics
                </Link>
                <span className="text-white">|</span>
                <span className="text-slate-950 bg-amber-400 py-1 px-2 rounded text-xs">
                  2 days ago
                </span>
              </div>
              <p className="md:hidden lg:block lg:text-justify text-slate-200 text-sm mt-3 max-h-0 font-extrabold overflow-hidden group-hover:max-h-40 transition-all duration-700">
                This is a small description that appears on hover, pushing
                everything upwards.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1 gap-1 w-full h-full relative group aspect-video overflow-hidden border-black outline-8">
          <Link
            to="/test"
            className="group text-white font-extrabold md:text-2xl lg:text-3xl cursor-pointer hover:underline text-justify"
          >
            <Images
              src="default-image.jpg"
              className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
              alt="The-Breaking0Image"
            />
            <div className="absolute bottom-0 p-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate non quo tempore, consequatur nobis error officia laborum
              debitis.
              <div className="relative font-semibold flex gap-2 items-center mt-3">
                <Link
                  to=""
                  className="text-slate-950 bg-red-700 py-1 px-2 rounded text-xs"
                >
                  Politics
                </Link>
                <span className="text-white">|</span>
                <span className="text-slate-950 bg-amber-400 py-1 px-2 rounded text-xs">
                  1 day ago
                </span>
              </div>
              <p className="text-slate-200 text-sm mt-3 max-h-0 font-extrabold overflow-hidden group-hover:max-h-40 transition-all duration-1000">
                <p className="md:hidden lg:block lg:text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas quae veniam provident quia quis non est commodi
                  repellat tenetur numquam, fuga cupiditate repellendus
                  accusantium saepe quam, alias deserunt consectetur sed facilis
                  assumenda, eum sint? Eaque, illum. Ipsa consectetur voluptas
                  temporibus quisquam neque exercitationem perferendis culpa
                  accusamus, ex reiciendis corrupti quos labore illo vitae!
                  Libero facilis vero suscipit eos in, ipsum placeat maiores
                  veniam amet dolores tempore omnis blanditiis molestias labore.
                </p>
              </p>
            </div>
          </Link>
        </div>
        <div className="grid grid-rows-2 gap-1 h-full">
          <div className="relative group aspect-video">
            <Link
              to="/test"
              className="text-white font-extrabold md:text-lg text-2xl cursor-pointer hover:underline mb-1"
            >
              <Images
                src="default-image.jpg"
                className="object-cover w-full h-full"
                alt="The-Breaking0Image"
              />
              <div className="absolute bottom-0 p-4">
                Lorem ipsum dolor sit ndjha.
                <div className="relative font-semibold flex gap-2 items-center mt-3">
                  <Link
                    to="/test"
                    className="text-slate-950 bg-red-700 py-1 px-2 rounded text-xs"
                  >
                    Politics
                  </Link>
                  <span className="text-white">|</span>
                  <span className="text-slate-950 bg-amber-400 py-1 px-2 rounded text-xs">
                    2 days ago
                  </span>
                </div>
                <p className="md:hidden lg:block lg:text-justify text-slate-200 text-sm mt-3 max-h-0 font-extrabold overflow-hidden group-hover:max-h-40 transition-all duration-1000">
                  This is a small description that appears on hover, pushing
                  everything upwards.
                </p>
              </div>
            </Link>
          </div>
          <div className="relative group aspect-video">
            <Link
              to="/test"
              className="text-white font-extrabold md:text-lg text-2xl cursor-pointer hover:underline mb-1"
            >
              <Images
                src="default-image.jpg"
                className="object-cover w-full h-full"
                alt="The-Breaking0Image"
              />
              <div className="absolute bottom-0 p-4">
                Lorem ipsum dolor sit ndjha.
                <div className="relative font-semibold flex gap-2 items-center mt-3">
                  <Link
                    to="/test"
                    className="text-slate-950 bg-red-700 py-1 px-2 rounded text-xs"
                  >
                    Politics
                  </Link>
                  <span className="text-white">|</span>
                  <span className="text-slate-950 bg-amber-400 py-1 px-2 rounded text-xs">
                    2 days ago
                  </span>
                </div>
                <p className="md:hidden lg:block lg:text-justify text-slate-200 text-sm mt-3 max-h-0 font-extrabold overflow-hidden group-hover:max-h-40 transition-all duration-1000">
                  This is a small description that appears on hover, pushing
                  everything upwards.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;

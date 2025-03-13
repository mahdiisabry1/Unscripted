import { Link, useParams } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import Images from "../components/Images";
import { useState } from "react";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import DOMPurify from "dompurify";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "Loading";
  if (error) return "Error.." + error.message;
  if (!data) return "post not found";

  const sanitizedContent = DOMPurify.sanitize(data.content);

  return (
    <>
      <div className="mx-10 md:mx-20 lg:mx-24 my-10">
        <div className="">
          <Link to="/cat" className="relative z-10 hover:text-red-800">
            {data.category}
          </Link>
        </div>
        <div className="">
          <h1 className="text-5xl mb-8">{data.title}</h1>
          <div>
            <span>
              by{" "}
              <Link to="/profile" className="hover:text-blue-800">
                {data.user.username}
              </Link>{" "}
              |{" "}
            </span>
            <span>{format(data.createdAt)}</span>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-[3fr_1fr] gap-2">
          <div className="">
            {/* Image */}
            <div className="w-full h md:h-72 lg:h-[30rem]">
              {data.img && (
                <div className="hidden h-full lg:block">
                  <Images
                    src={data.img}
                    w="600"
                    className="max-w-full h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="mt-5 text-justify [&_img]:max-w-full [&_img]:h-auto [&_img]:w-80 [&_img]:block [&_img]:mx-auto">
              <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            </div>
            <div className="mt-5">
              <span className="flex gap-5 items-center">
                <MdDeleteOutline className="text-2xl cursor-pointer" />
                <FaBookmark
                  fill={isBookmarked ? "black" : "transparent"}
                  stroke="black"
                  width="1em"
                  strokeWidth="1em"
                  onClick={handleBookmarClick}
                  className="cursor-pointer"
                />
                <div className="hover:text-red-600 cursor-pointer">Report</div>
              </span>
            </div>
            <Comments />
          </div>
          <div className="border-2">AdBanner</div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;

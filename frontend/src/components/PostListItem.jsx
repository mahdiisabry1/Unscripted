/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Images from "./Images";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-4 mb-8">
        {/* Image */}
        {post.img && (
          <div className="hidden md:block">
            <div className="w-[370px] h-48">
              <Images
                src={post.img}
                className="object-cover w-full h-full"
                alt="The-Breaking0Image"
              />
            </div>
          </div>
        )}
        {/* Details */}
        <div className="w-full overflow-hidden">
          <Link to={`/${post.slug}`} className="text-3xl hover:underline">
            <p>{post.title}</p>
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos magnam molestias recusandae totam minima!
          </p>
          <div className="flex gap-7">
            <div>
              <span>Written by - </span>
              <Link>{post.user.username}</Link>
            </div>
            <span>{format(post.createdAt)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostListItem;

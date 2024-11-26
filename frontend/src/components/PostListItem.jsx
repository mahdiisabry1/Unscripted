import { Link } from "react-router-dom";
import Images from "./Images";

const PostListItem = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-4">
        {/* Image */}
        <div className="hidden md:block md:w-full lg:w-[40rem] h-44">
          <Images
            src="default-image.jpg"
            className="object-cover w-full h-full"
            alt="The-Breaking0Image"
          />
        </div>
        {/* Details */}
        <div className="">
          <Link to="/test" className="text-3xl hover:underline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            provident debitis consequuntur ratione pariatur quam.
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos magnam molestias recusandae totam minima!
          </p>
          <div className="flex gap-7">
            <div>
              <span>Written by - </span>
              <Link>Jhon Doe</Link>
            </div>
            <div>
              <span>On - </span>
              <Link>Politics</Link>
            </div>
            <span>2 days ago</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostListItem;

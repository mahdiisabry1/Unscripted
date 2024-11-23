import { Link } from "react-router-dom";
import Images from "../components/Images";

const SinglePostPage = () => {
  return (
    <>
      <div className="mx-10 md:mx-20 lg:mx-24 my-10">
        <div className="">
          <span>Category</span>
        </div>
        <div className="">
          <h1 className="text-5xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Sunt, maxime!
          </h1>
          <div>
            <span>
              by <Link to="/profile">Mahdi Sabry</Link> |{" "}
            </span>
            <span>Published on Date </span>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-[3fr_1fr] gap-2">
          <div className="">
            {/* Image */}
            <div className="w-full h md:h-72 lg:h-[30rem]">
              <Images
                src="default-image.jpg"
                className="object-cover w-full h-full"
                alt="The-Breaking0Image"
              />
            </div>
            <div className="mt-5">Content</div>
          </div>
          <div className="border-2">AdBanner</div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;

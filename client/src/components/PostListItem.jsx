import Images from "./Images";

const PostListItem = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-6">
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
          <h1 className="text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            provident debitis consequuntur ratione pariatur quam.
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos magnam molestias recusandae totam minima!</p>

        </div>
      </div>
    </>
  );
};

export default PostListItem;

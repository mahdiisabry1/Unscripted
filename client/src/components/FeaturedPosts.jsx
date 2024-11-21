import Images from "./Images";

const FeaturedPosts = () => {
  return (
    <>
      <div className="mt-6 h-[30rem] w-full flex flex-col lg:flex-row">
        <Images
          src="default-image.jpg"
          className="object-cover w-full h-full"
          alt="The-Breaking0Image"
        />
      </div>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
        voluptatibus perspiciatis maiores voluptate voluptatum ratione. Modi nam
        eius ut corporis.
      </h1>
    </>
  );
};

export default FeaturedPosts;

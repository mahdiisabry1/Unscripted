import Comment from "./Comment";

const Comments = () => {
  return (
    <>
      <div className="flex flex-col gap-8 lg:w-3/5 mt-5">
        <h1 className="text-xl text-gray-500 underline">Comments</h1>
        <div className="flex items-center justify-between gap-8 w-full">
          <textarea
            name=""
            id=""
            placeholder="Write a comment..."
            className="p-5 w-full"
          />
          <button className="border-2 p-2 px-5 bg-blue-800 font-medium text-white">
            Comment
          </button>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </>
  );
};

export default Comments;

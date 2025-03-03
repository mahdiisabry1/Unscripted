import axios from "axios";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

// eslint-disable-next-line react/prop-types
const Comments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Comments not found";

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
        {data.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default Comments;

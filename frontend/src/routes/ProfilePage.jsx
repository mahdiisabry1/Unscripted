import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../ui/LoadingAnimation";
import PostNotFound from "../ui/PostNotFound";
import { useAuth } from "@clerk/clerk-react";
import Images from "../components/Images";
import UserProfile from "../components/UserProfile";

const ProfilePage = () => {
  const { userPostId } = useParams();
  const { getToken } = useAuth();


  const fetchUserPosts = async () => {
    const token = await getToken();
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/${userPostId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    return res.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["userPosts", userPostId],
    queryFn: fetchUserPosts,
  });

  if (isPending) return <LoadingAnimation />;
  if (error) return "Error: " + error.message;
  if (!data) return <PostNotFound />;

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 mt-5 h-[85vh]">
        <UserProfile />
        <div className="col-span-3 row-span-5 col-start-3 row-start-1 ">
          {data.map((post) => (
            <div
              key={post._id}
              className="bg-slate-200 rounded shadow-md overflow-hidden flex flex-col"
            >
              <Images
                src={post.img}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-sm">{post.title}</h3>
                <p className="text-xs text-gray-700 line-clamp-2">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

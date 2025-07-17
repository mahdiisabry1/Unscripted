import axios from "axios";
import Images from "./Images";
import { useParams } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import PostNotFound from "../ui/PostNotFound";
import LoadingAnimation from "../ui/LoadingAnimation";

const UserProfile = () => {
  const { id } = useParams();
  const { getToken } = useAuth();

  const fetchUser = async (id) => {
    const token = await getToken();
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/user/me/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  };
  const {
    isPending: isUserPending,
    error: userError,
    data: userData,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
  });

  if (isUserPending) return <LoadingAnimation />;
  if (userError) return "Error: " + userError.message;
  if (!userData) return <PostNotFound />;

  return (
    <>
      <div className="row-span-2">
        <div className="w-full h-full bg-slate-300">
          <Images src="" className="h-full" alt="Image" />
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-1 row-start-3">
        About Me
      </div>
      <div className="row-span-2">
        <div className=""></div>
        <div className="">Title : {userData.username}</div>
        <div className="">Total Posts : {userData.createdPosts.length}</div>
        <div className="">Total post views : </div>
        <div className="flex flex-col">
          <div>Send Message : </div>
          <div>Report User</div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

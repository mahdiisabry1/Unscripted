/* eslint-disable react/prop-types */
import { MdDeleteOutline } from "react-icons/md";
import { FaBookmark, FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../ui/DeletePopup";

const PostMenuAction = ({ post }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      toast.success("Post deleted Successfully");
      navigate("/");
    },
    onError: () => {
      toast.error("Error deleting post");
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      <div className="mt-5">
        <span className="flex gap-5 items-center">
          {user && post.user.username === user.username && (
            <>
              <FaEdit className="cursor-pointer" />
              <MdDeleteOutline
                className="text-2xl cursor-pointer"
                onClick={() => setShowDeletePopup(true)}
              />
            </>
          )}
          <FaBookmark
            fill={isBookmarked ? "black" : "transparent"}
            stroke="black"
            width="1em"
            strokeWidth="1em"
            onClick={handleBookmarClick}
            className="cursor-pointer"
          />
          <div className="hover:text-red-600 cursor-pointer">Report</div>
          <div className="hover:text-gray-400 cursor-pointer">
            <button className="p-4">Summarize</button>
          </div>
        </span>
      </div>
      {showDeletePopup && (
        <DeletePopup
          onConfirm={handleDelete}
          onCancel={() => setShowDeletePopup(false)}
        />
      )}
    </>
  );
};

export default PostMenuAction;

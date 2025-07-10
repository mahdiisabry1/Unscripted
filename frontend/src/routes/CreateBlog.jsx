import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import Upload from "../components/Upload";
import CategoryTagInput from "../components/CategoryTag";

const CreateBlog = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (updatedCategories) => {
    setCategories(updatedCategories);
  };

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${img.url}"/></p>`
      );
  }, [img, video]);

  const navigate = useNavigate();
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      console.log(token);
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: categories,
      desc: formData.get("desc"),
      content: value,
    };

    mutation.mutate(data);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-light">Create a New Post</h1>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-6 flex-1 mb-6"
        >
          <Upload type="image" setProgress={setProgress} setData={setCover}>
            <div className="relative h-36 w-5/12 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 overflow-hidden">
              {cover ? (
                <img
                  src={cover}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm text-gray-500">Cover Image</span>
              )}

              {/* Pencil icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  ></path>
                </svg>
              </div>
            </div>
          </Upload>
          <input
            className="font-semibold bg-transparent p-4"
            type="text"
            name="title"
            id=""
            placeholder="KEEP IT SHORT"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <CategoryTagInput onChange={handleCategoryChange} />
          <button
            type="button"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            // onClick={generateDescription}
          >
            Generate A Catchy Description with AI
          </button>
          <textarea
            className="p-4 bg-white shadow-md"
            name="desc"
            id=""
            placeholder="Give a sneak peek of what this is about..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex flex-1">
            <div className="flex flex-col gap-2 mr-2 justify-center">
              <Upload type="image" setProgress={setProgress} setData={setImg}>
                <FaImage />
              </Upload>
              <Upload type="video" setProgress={setProgress} setData={setVideo}>
                <FaVideo />
              </Upload>
            </div>
            <ReactQuill
              theme="snow"
              className="flex-1 rounded-xl bg-white shadow-md quill-editor"
              value={value}
              onChange={setValue}
              readOnly={0 < progress && progress < 100}
            />
          </div>
          <button
            disabled={mutation.isPending || (0 < progress && progress < 100)}
            className="bg-blue-800 text-white font-medium mt-4 p-2 w-40 disabled:bg-red-500 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? "Loading" : "Publish"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;

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
// import OpenAI from "openai";


const CreateBlog = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const generateDescription = async () => {
  //   try {
  //     const response = await openai.completions.create({
  //       model: "text-davinci-003", // or any other model you prefer
  //       prompt: `Generate a short description for a story titled "${title}"`,
  //       max_tokens: 100,
  //     });

  //     setDescription(response.choices[0].text.trim());
  //   } catch (error) {
  //     console.error("Error generating description:", error);
  //   }
  // };

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
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    mutation.mutate(data);
  };

  return (
    <>
      <div className="h-[calc(100vh-56px)] flex flex-col gap-6">
        <h1 className="text-lg font-light">Create a New Post</h1>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-6 flex-1 mb-6"
        >
          <Upload type="image" setProgress={setProgress} setData={setCover}>
            <button className="w-max p-2 shadow-md text-sm text-gray-500 bg-white">
              Cover Image
            </button>
          </Upload>
          <input
            className="text-4xl font-semibold bg-transparent outline-none"
            type="text"
            name="title"
            id=""
            placeholder="My Awsome Story"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="button"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            // onClick={generateDescription}
          >
            Generate Short Description with AI
          </button>
          <div className="">
            <label htmlFor="">Choose a category : </label>
            <select name="category" id="">
              <option value="Geopolitics">Geopolitics</option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Religion">Religion</option>
            </select>
          </div>
          <textarea
            className="p-4 bg-white shadow-md"
            name="desc"
            id=""
            placeholder="A short description"
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
              className="flex-1 rounded-xl bg-white shadow-md"
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

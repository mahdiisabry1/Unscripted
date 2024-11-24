import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const CreateBlog = () => {
  const { isLoaded, isSignedIn } = useUser();

  if(!isLoaded) {
    return <div className="">Loading...</div>
  }

  if(isLoaded && !isSignedIn){
    return <div className="">You should login!</div>
  }

  return (
    <>
      <div className="h-[calc(100vh-56px)] flex flex-col gap-6">
        <h1 className="text-lg font-light">Create a New Post</h1>
        <form action="" className="flex flex-col gap-6 flex-1 mb-6">
          <button className="w-max p-2 shadow-md text-sm text-gray-500 bg-white">
            Cover Image
          </button>
          <input
            className="text-4xl font-semibold bg-transparent outline-none"
            type="text"
            name=""
            id=""
            placeholder="My Awsome Story"
          />
          <div className="">
            <label htmlFor="">Choose a category : </label>
            <select name="cat" id="">
              <option value="general">Geopolitics</option>
              <option value="general">Technology</option>
              <option value="general">Sports</option>
              <option value="general">Cybersecurity</option>
              <option value="general">Lifestyle</option>
              <option value="general">Religion</option>
            </select>
          </div>
          <textarea
            className="p-4 bg-white shadow-md"
            name=""
            id=""
            placeholder="A short description"
          />
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
          />
          <button className="bg-blue-800 text-white font-medium mt-4 p-2 w-40">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;

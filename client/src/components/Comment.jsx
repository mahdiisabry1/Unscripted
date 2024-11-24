import { Link } from "react-router-dom";
import Images from "./Images";

const Comment = () => {
  return (
    <>
      <div className="p-4 bg-slate-50 mb-8">
        <div className="flex items-center gap-4">
          <Link to="/profile" className="flex items-center gap-2">
            <Images
              src="default-image.jpg"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-medium">Mahdi</span>
          </Link>
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <div className="mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            repellendus saepe fuga ut explicabo dolores error praesentium, earum
            optio eos!
          </p>
        </div>
      </div>
    </>
  );
};

export default Comment;

import { Link } from "react-router-dom";
import Images from "./Images";

const AdBanner = () => {
  return (
    <>
      <div className="h-16 justify-center md:h-24 flex md:justify-between mt-2">
        <Link
          to="/"
          className="unscriptedlogo flex gap-4 items-center text-2xl font-bold"
        >
          <Images src="" className="" w="32" h="32" alt=""/>
          <span>
            Un<span className="text-red-700">S</span>cripted
          </span>
        </Link>
        <div className="hidden md:block h-full w-8/12 border-2">
          <img
            src=""
            alt="Google Ad Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default AdBanner;

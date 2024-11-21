import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import Images from "./Images";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-16 md:h-20 w-full flex justify-between items-center">
        <Link
          to="/"
          className="unscriptedlogo flex gap-4 items-center text-2xl font-bold"
        >
          <Images src="" alt="" w="32" h="32" />
          <span>
            Un<span className="text-red-700">S</span>cripted
          </span>
        </Link>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className="cursor-pointer text-4xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <IoClose /> : <IoMenu />}
          </div>
          {/* mobile List */}
          <div
            className={`h-screen w-full flex flex-col items-center justify-center gap-10 absolute top-16 bg-white transition-all ${
              open ? "-right-0" : "-right-[-100%]"
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">About</Link>
            <Link to="/">Login</Link>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 xl:gap-12">
          <Link to="/" className="flex items-center gap-2">
            <TiHomeOutline />
            Home
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <IoIosTrendingUp />
            Trending
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <FcAbout />
            About
          </Link>
          <Link to="/login">
            <button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

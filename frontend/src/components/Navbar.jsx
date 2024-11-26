/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => console.log(token));
  }, []);

  const weekdayEmojis = {
    Monday: "🏢",
    Tuesday: "🌮",
    Wednesday: "🐪",
    Thursday: "🍂",
    Friday: "🌙",
    Saturday: "🌴",
    Sunday: "⛓️‍💥",
  };

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const weekday = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const dateWithEmoji = `${weekdayEmojis[weekday] || ""} ${formattedDate}`;
    setDate(dateWithEmoji);
  }, [weekdayEmojis]);

  return (
    <>
      <div className="h-14 md:h-16 w-full flex justify-between items-center">
        {/* Date , Time and Temprature */}
        <div className="gap-1 flex md:gap-16">
          <div className="">34c, Sunny</div>
          <div className="">{date}</div>
        </div>
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
            className={`h-[calc(100vh-56px)] w-full flex flex-col items-center justify-center gap-10 absolute top-16 bg-white transition-all duration-500 z-50 ${
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
        <div className="hidden md:flex gap-8 xl:gap-12 items-center">
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
          <SignedOut>
            <Link to="/login">
              <button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                Login
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Navbar;

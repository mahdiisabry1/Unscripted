import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-24 lx:px-32 2xl:px-34">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;

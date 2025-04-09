const ProfilePage = () => {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 mt-5 h-[85vh]">
        <div className="row-span-2">
          <div className="w-full h-full bg-slate-300">
            <img src="#" alt="" />
          </div>
        </div>
        <div className="col-span-2 row-span-3 col-start-1 row-start-3">
          About Me
        </div>
        <div className="row-span-2">
          <div className="">Name</div>
          <div className="">Title</div>
          <div className="">Total Posts : </div>
          <div className="">Total post views : </div>
          <div className="flex flex-col">
            <div>Send Message</div>
            <div>Report User</div>
          </div>
        </div>
        <div className="col-span-3 row-span-5 col-start-3 row-start-1 ">
          <div className="grid grid-cols-6 grid-rows-6 gap-2 h-full">
            <div className="col-span-2 row-span-3 bg-slate-300"></div>
            <div className="col-span-2 row-span-3 col-start-3 bg-slate-300"></div>
            <div className="col-span-2 row-span-3 col-start-5 bg-slate-300"></div>
            <div className="col-span-2 row-span-3 row-start-4 bg-slate-300"></div>
            <div className="col-span-2 row-span-3 col-start-3 row-start-4 bg-slate-300"></div>
            <div className="col-span-2 row-span-3 col-start-5 row-start-4 bg-slate-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

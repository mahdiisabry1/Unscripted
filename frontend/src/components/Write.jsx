import { Link } from "react-router-dom";

const Write = () => {
  return (
    <>
      <div>
        <Link to="/write" className="hidden md:block relative">
          <button className="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100">
            Start Writing
          </button>
        </Link>
      </div>
    </>
  );
}

export default Write

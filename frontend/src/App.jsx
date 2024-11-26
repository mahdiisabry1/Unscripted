import AdBanner from "./components/AdBanner";
import Navbar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar";

function App() {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-34">
        {/* Secondary Navbar */}
        <SecondNavbar />
        {/* Advertisements */}
        <AdBanner />
        {/* Secondary Navbar */}
        <Navbar />
        {/* BreadCrumbs */}
        {/*Introduction */}
        {/* Featured */}
        {/* PostLists */}
      </div>
    </>
  );
}

export default App;

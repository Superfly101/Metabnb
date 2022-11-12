import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <header className="sticky z-20 bg-white top-0 flex justify-between items-center py-4 px-4 md:py-8 md:px-16">
        <div className="w-40">
          <img className="w-full" src="/logo.png" alt="Metabnb logo" />
        </div>
        <ul className="hidden gap-6 md:flex">
          <li>
            <Link to={"home"}>Home</Link>
          </li>
          <li>
            <Link to={"places"}>Place to stay</Link>
          </li>
          <li>
            <Link to={""}>NFTs</Link>
          </li>
          <li>
            <Link to={""}>Community</Link>
          </li>
        </ul>
        <button className="hidden bg-gradient text-white py-2 px-4 rounded-md hover:opacity-75 md:block">
          Connect wallet
        </button>

        <div
          onClick={toggleSidebar}
          className="relative z-20 flex flex-col h-10 w-10 p-2 gap-[.3rem] bg-purple rounded-full justify-center cursor-pointer md:hidden"
        >
          <div className="bg-white h-[2px] rounded-lg"></div>
          <div className="bg-white h-[2px] rounded-lg"></div>
          <div className="bg-white h-[2px] rounded-lg"></div>
        </div>
      </header>
      <SideBar show={showSidebar} />
    </>
  );
};

export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import SideBar from "./SideBar";

const Header = () => {
  const NAVIGATION_LIST = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Place to stay",
      path: "/places",
    },
    {
      title: "NFTs",
      path: "/",
    },
    {
      title: "Community",
      path: "/",
    },
  ];
  const [showSidebar, setShowSidebar] = useState(false);

  const [showConnectWallet, setShowConnectWallet] = useState(false);

  const toggleSidebarHandler = () => {
    setShowSidebar((prev) => !prev);
  };

  const toggleConnectWallet = () => {
    setShowConnectWallet((prev) => !prev);
  };

  return (
    <>
      <header className="sticky z-20 bg-white top-0 flex justify-between items-center py-4 px-4 text-black md:py-8 md:px-16">
        <div className="w-40">
          <img className="w-full" src="/logo.png" alt="Metabnb logo" />
        </div>
        <ul className="hidden gap-10 md:flex">
          {NAVIGATION_LIST.map((element, index) => (
            <li key={index}>
              <Link to={element.path}>{element.title}</Link>
            </li>
          ))}
        </ul>
        <button
          className="hidden bg-gradient text-white py-2 px-4 rounded-md hover:opacity-75 md:block"
          onClick={toggleConnectWallet}
        >
          Connect wallet
        </button>

        <div
          onClick={toggleSidebarHandler}
          className="relative z-20 flex flex-col h-10 w-10 p-2 gap-[.3rem] bg-purple rounded-full justify-center cursor-pointer md:hidden"
        >
          <div className="bg-white h-[2px] rounded-lg"></div>
          <div className="bg-white h-[2px] rounded-lg"></div>
          <div className="bg-white h-[2px] rounded-lg"></div>
        </div>
      </header>
      <SideBar
        navItems={NAVIGATION_LIST}
        show={showSidebar}
        toggleModal={toggleConnectWallet}
        toggleSidebar={toggleSidebarHandler}
      />
      {showConnectWallet && (
        <ConnectWallet onCloseHandler={toggleConnectWallet} />
      )}
    </>
  );
};

export default Header;

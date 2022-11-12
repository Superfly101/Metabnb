import { Link } from "react-router-dom";

const SideBar = ({ show }) => {
  return (
    <aside
      className={`fixed z-10 w-full bg-white transition duration-[400ms] top-0 right-0 ${
        show ? "translate-y-0" : "-translate-y-full"
      } shadow-bottom md:hidden`}
    >
      <ul className="pt-16 text-black w-full md:flex">
        <li className="border-b py-6 px-4">
          <Link to={"home"}>Home</Link>
        </li>
        <li className="border-b py-6 px-4">
          <Link to={"places"}>Place to stay</Link>
        </li>
        <li className="border-b py-6 px-4">
          <Link to={""}>NFTs</Link>
        </li>
        <li className="border-b py-6 px-4">
          <Link to={""}>Community</Link>
        </li>
      </ul>
      <div className="py-6 px-4">
        <button className="bg-gradient text-white w-full py-2 px-4 rounded-md hover:opacity-75">
          Connect wallet
        </button>
      </div>
    </aside>
  );
};

export default SideBar;

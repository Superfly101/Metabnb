import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between py-8 px-4">
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
      <button className="bg-gradient text-white py-2 px-4 rounded-lg hover:opacity-75">
        Connect wallet
      </button>
    </header>
  );
};

export default Header;

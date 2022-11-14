import { Link, useNavigate } from "react-router-dom";

const SideBar = ({ navItems, show, toggleModal, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <aside
      className={`fixed z-10 w-full bg-white transition duration-[400ms] top-0 right-0 ${
        show ? "translate-y-0" : "-translate-y-full"
      } shadow-bottom lg:hidden`}
    >
      <ul className="pt-16 text-black w-full lg:flex">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              navigate(item.path);
              toggleSidebar();
            }}
            className="border-b py-6 px-4 cursor-pointer hover:bg-[#F8F9FA]"
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="py-6 px-4">
        <button
          className="bg-gradient text-white w-full py-2 px-4 rounded-md hover:opacity-75"
          onClick={toggleModal}
        >
          Connect wallet
        </button>
      </div>
    </aside>
  );
};

export default SideBar;

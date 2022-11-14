import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
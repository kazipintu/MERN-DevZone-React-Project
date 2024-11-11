import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About-us/About";
import Pricing from "../components/Pricing/Pricing";
import OurTeam from "../components/OurTeam/OurTeam";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/team",
        element: <OurTeam />
      },
      {
        path: "/contact",
        element: <Contact />
      },

    ]
  }
])

export default router;
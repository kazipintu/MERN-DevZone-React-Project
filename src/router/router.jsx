import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About-us/About";
import Pricing from "../components/Pricing/Pricing";
import OurTeam from "../components/OurTeam/OurTeam";
import Contact from "../components/Contact/Contact";
import Services from "../components/Services/Services";
import ServiceDetails from "../components/Services/ServiceDetails/ServiceDetails";
import TeamSingle from "../components/OurTeam/TeamSingle/TeamSingle";
import Blogs from "../components/Blogs/Blogs";
import BlogDetails from "../components/Blogs/BlogDetails";

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
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />
      },
      {
        path: "/team",
        element: <OurTeam />
      },
      {
        path: "/team-single/:name",
        element: <TeamSingle />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails />
      },

    ]
  }
])

export default router;
import { useEffect } from "react";
import Team from "../Team/Team";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Reviews from "./Reviews/Reviews";
import ShortAbout from "./ShortAbout/ShortAbout";
import ShortPortfolio from "./ShortPortfolio/ShortPortfolio";
import ShortProjects from "./ShortProjects/ShortProjects";
import ShortServices from "./ShortServices/ShortServices";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Banner />
      <ShortAbout />
      <ShortServices />
      <ShortPortfolio />
      <ShortProjects />
      <Team />
      <Reviews />
      <Blog />
    </div>
  );
};

export default Home;
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
    window.scrollTo(0, 0);
    document.title = "Home";
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
      <div className='bg-[url("/assets/cta-bg2.png")] py-[50px]'>
        <div className="container mx-auto px-[1%] lg:px-[100px] py-[100px]   text-center ">
          <h1 className='text-6xl font-semibold text-white pb-6'>Let’s work together</h1>
          <p className="text-lg leading-[1.8] text-slate-300 pb-12">Each demo built with Teba will look different. You can customize anything <br /> appearance of your website with only a few clicks</p>
          <div className="py-4">
            <button className='btn btn-animation py-4 w-[150px] font-normal text-blue-950 lg:w-[200px] bg-white hover:bg-white text-lg border-0 outline-none'>
              <p className="animation-top2 w-[140px] lg:w-[200px] text-center">Let’s Start a Project</p>
              <p className="animation-bottom2 w-[140px] lg:w-[200px] text-center">Let’s Start a Project</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
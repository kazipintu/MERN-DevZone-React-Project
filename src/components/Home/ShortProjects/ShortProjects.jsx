import { Link } from "react-router-dom";
import './ShortProjects.css';
import { GoArrowUpRight } from "react-icons/go";

const ShortProjects = () => {
  return (
    <div className="bg-stone-200 py-[50px]">
      <div className="container mx-auto lg:px-[50px]">
        <h1 className="text-4xl md:text-5xl text-center pb-12 w-1/2 mx-auto font-semibold text-blue-900">Explore our recent projects</h1>

        <div className="flex flex-wrap gap-5 justify-center">
          <Link to={"#"} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p1.png)] project-photo-card bg-no-repeat bg-center relative h-[360px] w-[300px] md:w-[360px] rounded-2xl transition-all duration-500">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-6 z-[2]">
              <span className="block text-white font-bold text-center text-2xl">Digital Product Design</span>
              <span className="block text-white/85 text-center text-xl">Design, Graphics</span>
            </div>
            <div className="project-button-card w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex justify-center items-center" ><GoArrowUpRight className="size-7 text-blue-700" />
              </button>
            </div>
          </Link>

          <Link to={"#"} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p2.png)] project-photo-card bg-no-repeat bg-center relative h-[360px] w-[300px] md:w-[360px] rounded-2xl transition-all duration-500">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-6 z-[2]">
              <span className="block text-white font-bold text-center text-2xl">Cyber Security Analysis</span>
              <span className="block text-white/85 text-center text-xl">Security, Technology</span>
            </div>
            <div className="project-button-card w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex justify-center items-center" ><GoArrowUpRight className="size-7 text-blue-700" /> </button>
            </div>
          </Link>

          <Link to={"#"} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p3.png)] project-photo-card bg-no-repeat bg-center relative h-[360px] w-[300px] md:w-[360px] rounded-2xl transition-all duration-500">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-6 z-[2]">
              <span className="block text-white font-bold text-center text-2xl">Health App Development</span>
              <span className="block text-white/85 text-center text-xl">Development, Software</span>
            </div>
            <div className="project-button-card w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex justify-center items-center" ><GoArrowUpRight className="size-7 text-blue-700" /> </button>
            </div>
          </Link>

          <Link to={"#"} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p4.png)] project-photo-card bg-no-repeat bg-center relative h-[360px] w-[300px] md:w-[360px] rounded-2xl transition-all duration-500">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-6 z-[2]">
              <span className="block text-white font-bold text-center text-2xl">Health App Development</span>
              <span className="block text-white/85 text-center text-xl">Development, Software</span>
            </div>
            <div className="project-button-card w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex justify-center items-center" ><GoArrowUpRight className="size-7 text-blue-700" /> </button>
            </div>
          </Link>

          <Link to={"#"} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p5.png)] project-photo-card bg-no-repeat bg-center relative h-[360px] w-[300px] md:w-[740px] rounded-2xl transition-all duration-500">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-6 z-[2]">
              <span className="block text-white font-bold text-center text-2xl">Health App Development</span>
              <span className="block text-white/85 text-center text-xl">Development, Software</span>
            </div>
            <div className="project-button-card w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex justify-center items-center" ><GoArrowUpRight className="size-7 text-blue-700" /> </button>
            </div>
          </Link>
        </div>
        <div className="w-auto mx-auto my-5 text-center">
          <button className='btn btn-animation w-[150px] lg:w-[200px] bg-[var(--primary)] text-white sm:text-sm md:text-md lg:text-lg border-0 outline-none hover:bg-[var(--primary)]'>
            <p className='animation-top w-[140px] lg:w-[200px] text-center'>View Our All Works</p>
            <p className='animation-bottom w-[140px] lg:w-[200px] text-center'>View Our All Works</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortProjects;
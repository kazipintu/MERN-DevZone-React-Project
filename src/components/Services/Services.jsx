import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import AwesomeServices from "./AwesomeServices";
import WorkTogether from "../About-us/WorkTogether/WorkTogether";

const Services = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services";
  }, []);

  const ourServicesCard = [
    {
      title: "Initiation & Planning",
      paragraph: "We are architects innovation trailblazers of technological advancement",
      img: "/assets/illustration1.svg"
    },
    {
      title: "Execution & Development",
      paragraph: "We are architects innovation trailblazers of technological advancement",
      img: "/assets/illustration2.svg"
    },
    {
      title: "Testing & Maintenance",
      paragraph: "We are architects innovation trailblazers of technological advancement",
      img: "/assets/illustration3.svg"
    },
  ]

  return (
    <div className="w-full">
      <div className="w-full bg-[url('/assets/breadcrumb.png')] pt-[200px] lg:pt-[230px] pb-[200px] ">
        <div className="text-center">
          <div className="mb-5 mt-[100px]">
            <h1 className="text-7xl  text-white font-bold">Our Services</h1>
          </div>
          <div className="text-white flex justify-center gap-3 items-center tracking-wider">
            <Link to="/" className="text-slate-300">Home</Link>
            <MdKeyboardArrowRight className="size-6" />
            <p>Our Services</p>
          </div>
        </div>
      </div>

      <div className="container px-[1%] lg:px-[100px] mx-auto py-5">
        <h1 className="w-[80%] lg:w-[70%] mx-auto sm:text-3xl lg:text-5xl font-semibold text-blue-900 text-center leading-[1.1] pt-[150px] pb-[75px]">Our working process on how to grow your business</h1>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 ">
          {
            ourServicesCard?.map((serviceCard, i) => (
              <div key={i} className="w-full">
                <img className="w-[300px] h-[300px] object-content mx-auto" src={serviceCard?.img} alt={serviceCard?.title} />
                <h3 className="text-2xl text-center font-semibold text-blue-900 leading-2 pt-5">{serviceCard?.title}</h3>
                <p className="text-md md:text-lg text-center text-blue-900/95 leading-4 tracking-wide pt-5">{serviceCard?.paragraph}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-full bg-stone-100">
        <h1 className="w-[80%] lg:w-[70%] mx-auto sm:text-3xl lg:text-5xl font-semibold text-blue-900 text-center leading-[1.1] pt-[150px] pb-[75px]">Our working process on how to grow your business</h1>
        <AwesomeServices />
      </div>
      <WorkTogether />
    </div>
  );
};

export default Services;
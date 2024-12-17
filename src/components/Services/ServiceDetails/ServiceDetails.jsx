import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import parse from 'html-react-parser';
import { FaCheck } from "react-icons/fa6";
import WorkTogether from "../../About-us/WorkTogether/WorkTogether";

const ServiceDetails = () => {

  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);
  const pathId = pathName.split("/service-details/")[1]
  //console.log(pathId);

  // split creates an array of which index 0 becomes first data [/service-details/] //
  // and, index 1 becomes second data [1] //
  // ["", "id", "services"] ... here "id" is having index number 1

  // === fetch the json data === //
  const [service, setService] = useState();

  useEffect(() => {
    fetch("/servicesData.json")
      .then(res => res.json())
      .then(data => setService(data))
  }, []);

  const serviceDetails = service ? service?.find(data => data?.id == pathId) : {};
  //console.log(serviceDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sevice Details";
  }, [pathId])


  return (
    <div className="w-full">
      <div className="w-full bg-[url('/assets/breadcrumb.png')] pt-[200px] lg:pt-[230px] pb-[200px] ">
        <div className="text-center">
          <div className="mb-5 mt-[100px]">
            <h1 className="text-7xl  text-white font-bold">{serviceDetails?.title}</h1>
          </div>
          <div className="text-white flex justify-center gap-3 items-center tracking-wider">
            <Link to="/" className="text-slate-300">Home</Link>
            <MdKeyboardArrowRight className="size-6" />
            <p>Service</p>
            <MdKeyboardArrowRight className="size-6" />
            <p>{serviceDetails?.title}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[1%] lg:px-[100px] py-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="w-full col-span-2">
            <img className="w-full h-auto rounded-3xl" src={serviceDetails?.bg} alt="" />
            <h3 className="text-2xl text-blue-900/95 font-semibold pt-[55px]">Overview</h3>
            <div>
              {
                parse(`${serviceDetails?.content}`)
              }
            </div>

            <h3 className="text-2xl text-blue-900/95 font-semibold pt-[40px]">Features</h3>
            <div>
              <p className="text-md md:text-lg text-left text-blue-900/95 leading-4 tracking-wide py-5">{parse(`${serviceDetails?.features?.content}`)}</p>
              <ul>
                {
                  serviceDetails?.features?.feature?.map((list, i) => (
                    <li key={i} className="py-3 text-lg md:text-xl text-left text-blue-900/95 leading-4 font-semibold tracking-wide flex items-center gap-2"><FaCheck className="size-6 font-semibold" />{list}</li>
                  ))
                }
              </ul>
            </div>

            <h3 className="text-2xl text-blue-900/95 font-semibold pt-[40px]">Goal</h3>
            <div>
              <p className="text-md md:text-lg text-left text-blue-900/95 leading-4 tracking-wide pt-5">{parse(`${serviceDetails?.goal}`)}</p>
            </div>
          </div>

          <div className="w-full col-span-1">
            <div className="w-full">
              {
                service?.map((task, i) => (
                  <Link key={i} className="block px-5 py-5 my-3 rounded-sm bg-stone-200 hover:bg-blue-700 text-sm md:text-[16px] text-left text-blue-900/95  hover:text-white font-semibold leading-4 tracking-wide transition-all duration-400" to={`/service-details/${task?.id}`}>{task?.title} </Link>
                ))
              }
            </div>
            <div className="w-[380px] h-[454px] bg-[url('/assets/services-bg.png')] rounded-2xl mt-[50px] flex justify-center items-center">
              <div className="text-center">
                <div className="mx-auto flex justify-center items-center w-[90px] h-[90px] bg-[#2c3e9c] rounded-xl mb-[15px]">
                  <img className="inline justify-center items-center w-[49px] h-[49px]" src="/assets/invisible.svg" alt="" />
                </div>
                <h3 className="text-white text-[34px] leading-[42px] font-bold mb-[10px]">Do not hesitate <br /> to contact us</h3>
                <p className="text-white leading-[30px] text-[16px] mb-[20px] tracking-widest">At our IT solution company, <br /> we are committed to exception</p>
                <button className='btn btn-animation w-[150px] lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                  <p className='animation-top w-[140px] lg:w-[200px] text-center'>Get in Touch</p>
                  <p className='animation-bottom w-[140px] lg:w-[200px] text-center'>Get in Touch</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkTogether />
    </div>
  );
};

export default ServiceDetails;
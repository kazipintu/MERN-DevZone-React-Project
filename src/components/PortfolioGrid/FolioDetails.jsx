import React from 'react';
import './PortfolioGrid.css';
import { Link, useLocation } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import parse from 'html-react-parser';
import { FaCheck } from 'react-icons/fa';
import WorkTogether from '../About-us/WorkTogether/WorkTogether';

export default function FolioDetails() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Folio Details";
  }, []);

  const [folioData, setFolioData] = React.useState();

  React.useEffect(() => {
    fetch('/folioData.json')
      .then(response => response.json())
      .then(data => setFolioData(data));
  }, []);

  const location = useLocation();
  const pathName = location.pathname;
  //console.log(pathName);
  const dataId = pathName.split('/folio-details/')[1];
  //console.log(dataId);

  const folio = folioData ? folioData?.find(data => data?.id == dataId) : {};

  return (
    <div className='w-full'>

      {/* banner */}
      <div className="w-full bg-[url('/assets/breadcrumb.png')] pt-[200px] lg:pt-[230px] pb-[200px] ">
        <div className="text-center">
          <div className="mb-5 mt-[100px]">
            <h1 className="mx-auto w-3/4 text-7xl  text-white font-bold">{folio?.subcategory}</h1>
          </div>
          <div className="text-white flex justify-center gap-3 items-center tracking-wider">
            <Link to={"/"} className="text-slate-300">Home</Link>
            <MdKeyboardArrowRight className="size-6" />
            <Link to={"/"} className="text-slate-300">Portfolio</Link>
            <MdKeyboardArrowRight className="size-4" />
            <p>{folio?.subcategory}</p>
          </div>
        </div>
      </div>

      {/* folio-details */}
      <div className="container mx-auto px-[1%] lg:px-24 py-24">
        <div className='w-full h-[800px] overflow-hidden pb-12'>
          <img src={folio?.bg} alt={folio?.category} className="w-full object-cover rounded-2xl" />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left-side section */}
          <div className='w-full md:col-span-2'>
            <h3 className='text-2xl font-semibold text-blue-900/95 pt-12'>Project overview</h3>
            {
              parse(`${folio?.content1}`)
            }
            <h3 className='text-2xl font-semibold text-blue-900/95 pt-5'>The challenge of project</h3>
            {
              parse(`${folio?.content2}`)
            }
            <ul className='pt-12'>
              {
                folio?.feature?.map((list, i) => (
                  <li key={i} className="py-3 text-md md:text-lg text-left text-blue-900/95 leading-4 font-semibold tracking-wide flex items-center gap-2"><FaCheck className="size-5 font-semibold" />{list}</li>
                ))
              }
            </ul>
            <div>
              <h3 className='text-2xl font-semibold text-blue-900/95 pt-5'>Final results</h3>
              {
                parse(`${folio?.content3}`)
              }
            </div>
          </div>

          {/* Rught-side section */}
          <div className='w-full md:col-span-1'>
            <div className='bg-[#f4f5f6] rounded-2xl p-[20px] mt-12'>
              <h3 className='text-[30px] font-semibold tracking-wider leading-loose text-blue-950/90 pb-3'>Project Details</h3>
              <div className='flex gap-4 items-center'>
                <ul>
                  <li className='text-[16px] font-semibold tracking-wider leading-loose text-blue-950/90 pb-3'>Client:</li>
                  <li className='text-[16px] font-semibold tracking-wider leading-loose text-blue-950/90 pb-3'>Category:</li>
                  <li className='text-[16px] font-semibold tracking-wider leading-loose text-blue-950/90 pb-3'>Date:</li>
                  <li className='text-[16px] font-semibold tracking-wider leading-loose text-blue-950/90'>Website:</li>
                </ul>
                <ul>
                  <li className='text-[17px] tracking-wider leading-loose text-blue-950/90 pb-3'>Porter Victoria</li>
                  <li className='text-[17px] tracking-wider leading-loose text-blue-950/90 pb-3'>Web Development</li>
                  <li className='text-[17px] tracking-wider leading-loose text-blue-950/90 pb-3'>20 January, 2023</li>
                  <li className='text-[17px] tracking-wider leading-loose text-blue-950/90'><Link to={"mailto:example@gmail.com"}>example@gmail.com</Link></li>
                </ul>
              </div>

              <div className='flex gap-2 justify-start items-center px-5'>

              </div>
            </div>
            <div className="bg-[url('/assets/services-bg.png')] rounded-2xl mt-[50px] flex justify-center items-center">
              <div className="text-center p-8">
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

      {/* work together */}
      <WorkTogether />
    </div>
  )
}

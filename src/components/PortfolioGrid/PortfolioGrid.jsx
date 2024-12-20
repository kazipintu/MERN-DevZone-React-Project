import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioGrid.css';
import { GoArrowUpRight } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function PortfolioGrid() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portfolio";
  }, [])

  const [folioData, setFolioData] = React.useState();

  React.useEffect(() => {
    fetch('/folioData.json')
      .then(response => response.json())
      .then(data => setFolioData(data))
  }, [])
  //console.log(folioData);

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 3;

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;

  const currentIndex = folioData?.slice(firstIndex, lastIndex)

  console.log(currentIndex);

  return (
    <div className='w-full'>

      {/* banner */}
      <div className="w-full bg-[url('/assets/breadcrumb.png')] pt-[200px] lg:pt-[230px] pb-[200px] ">
        <div className="text-center">
          <div className="mb-5 mt-[100px]">
            <h1 className="text-7xl  text-white font-bold">Portfolio Grid</h1>
          </div>
          <div className="text-white flex justify-center gap-3 items-center tracking-wider">
            <Link to={"/"} className="text-slate-300">Home</Link>
            <MdKeyboardArrowRight className="size-6" />
            <p>Portfolio Grid</p>
          </div>
        </div>
      </div>

      {/* PortfolioGrid */}
      <div className="bg-stone-200 py-24">
        <div className="container mx-auto px-[1%] lg:px-25">
          <div className="flex flex-wrap gap-6 justify-center">
            {
              currentIndex && currentIndex?.map((folio, i) => (
                <Link key={i} to={`/folio-details/${folio?.id}`} style={{ backgroundImage: `url(${folio?.bg})` }} className='block overflow-hidden bg-[url(${folio?.bg})] project-photo-card bg-no-repeat bg-center relative h-[360px] w-[300px] md:w-[360px] rounded-2xl transition-all duration-500'>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-6 z-[2]">
                    <span className="block text-white font-bold text-center text-2xl">{folio?.category}</span>
                    <span className="block text-white/85 text-center text-xl">{folio?.subcategory}</span>
                  </div>
                  <div className="project-button-card w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center transition-all duration-500">
                    <button className="w-[60px] h-[60px] bg-white rounded-md flex justify-center items-center" ><GoArrowUpRight className="size-7 text-blue-700" />
                    </button>
                  </div>
                </Link>
              ))
            }
          </div>
          {/* pagination */}
          <div className='mx-auto pt-20 flex justify-center items-center gap-[14px]'>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage == 1}
              className='bg-[#585b6f49] disabled:bg-[#585b6f49] disabled:text-black p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dff] text-blue-950 hover:text-white w-16 h-16'>
              <IoIosArrowBack className='size-5' />
            </button>
            {
              Array.from({ length: Math.ceil(folioData?.length / dataPerPage) }, (__, number) => (
                <button key={number}
                  onClick={() => setCurrentPage(number + 1)}
                  className={`p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dff]  text-blue-950 hover:text-white w-16 h-16 ${currentPage == (number + 1) ? "bg-[#2b4dff] text-white" : "bg-[#585b6f49]"}`}>
                  {number + 1}
                </button>
              ))
            }
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage == Math.ceil(folioData?.length / dataPerPage)}
              className='bg-[#585b6f49] disabled:bg-[#585b6f49] disabled:text-black p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dff] text-blue-950 hover:text-white w-16 h-16'>
              <IoIosArrowForward className='size-5' />
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

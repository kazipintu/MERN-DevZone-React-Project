import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Blogs.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

export default function Blogs() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blogs";
  }, []);

  const [blogsData, setBlogsData] = React.useState();

  React.useEffect(() => {
    fetch('/blogsData.json')
      .then(response => response.json())
      .then(data => setBlogsData(data))
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 3;

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;

  const currentIndex = blogsData?.slice(firstIndex, lastIndex)

  console.log(currentIndex);

  return (
    <div className='w-full'>

      {/* banner */}
      <div className="w-full bg-[url('/assets/breadcrumb.png')] pt-[200px] lg:pt-[230px] pb-[200px] ">
        <div className="text-center">
          <div className="mb-5 mt-[100px]">
            <h1 className="text-7xl  text-white font-bold">Blog</h1>
          </div>
          <div className="text-white flex justify-center gap-3 items-center tracking-wider">
            <Link to={"/"} className="text-slate-300">Home</Link>
            <MdKeyboardArrowRight className="size-6" />
            <p>Blog</p>
          </div>
        </div>
      </div>

      {/* show data */}
      <div className="container mx-auto px-[1%] lg:px-24 py-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* left-side section */}
          <div className='w-full md:col-span-2'>
            {
              currentIndex && currentIndex?.map((blog, i) => (
                <div key={i} className="rounded-2xl border hover:border-none hover:shadow-xl overflow-hidden my-6">
                  <div className='w-full h-[400px] overflow-hidden'>
                    <img className='w-full h-full object-cover hover:scale-110 transition-all duration-300' src={blog?.img} alt={blog?.img} />
                  </div>
                  <div className="w-full bg-white p-10">
                    <div className='flex gap-3 justify-start items-center'>
                      <p className='text-3 tracking-wider leading-loose text-blue-950/80 hover:text-blue-700'>{blog?.category}</p>
                      •
                      <p className='text-3 tracking-wider leading-loose text-blue-950/80 hover:text-blue-700'>{blog?.date}</p>
                    </div>
                    <h1 className='text-[#0a165e] text-5xl font-bold py-4'>{blog?.title}</h1>
                    <p className='text-3 tracking-wider leading-loose text-blue-950/80 py-4'>{blog?.sDesc}</p>
                    <Link className="flex gap-2 items-center pt-2 text-[var(--primary)] font-semibold slider-learn" to={`/blog-details/${blog?.id}`}><FaArrowRightLong className="withHover" /> Learn More <FaArrowRightLong className="withoutHover" /> </Link>
                  </div>
                </div>
              ))
            }

            {/* pagination */}
            <div className='pt-20 flex justify-start items-center gap-[14px]'>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage == 1}
                className='bg-[#585b6f49] disabled:bg-[#e9e9e9] disabled:text-black p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dff] text-blue-950 hover:text-white w-16 h-16'>
                <IoIosArrowBack className='size-5' />
              </button>
              {
                Array.from({ length: Math.ceil(blogsData?.length / dataPerPage) }, (__, number) => (
                  <button key={number}
                    onClick={() => setCurrentPage(number + 1)}
                    className={`p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dff]  text-blue-950 hover:text-white w-16 h-16 ${currentPage == (number + 1) ? "bg-[#2b4dff] text-white" : "bg-[#585b6f49]"}`}>
                    {number + 1}
                  </button>
                ))
              }
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage == Math.ceil(blogsData?.length / dataPerPage)}
                className='bg-[#585b6f49] disabled:bg-[#e9e9e9] disabled:text-black p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dff] text-blue-950 hover:text-white w-16 h-16'>
                <IoIosArrowForward className='size-5' />
              </button>
            </div>
          </div>

          {/* Right-side section */}
          <div className='w-full md:col-span-1 my-6'>
            <div className='bg-[#f4f5f6] rounded-2xl p-[30px]'>
              <h3 className='text-[20px] font-semibold tracking-wider leading-loose text-blue-950/90 pb-5'>Search</h3>
              <div className="relative flex w-[276px] h-[60px]">
                <input
                  className='w-full h-full border border-gray-300 focus:border-[#2b4dff] focus:outline-none rounded-lg pl-10' type="search" placeholder='Type to search'
                />
                <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FiSearch className='w-6 h-6 text-[#2b4dff]' />
                </button>
              </div>
            </div>
            <div className='bg-[#f4f5f6] rounded-2xl p-[30px] mt-6'>
              <h3 className='text-[20px] font-semibold tracking-wider leading-loose text-blue-950/90 pb-3'>Categories</h3>
              <Link to={"/blogs"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Uncategorized</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(18)</p>
              </Link>

              <Link to={"/blogs"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Marketing</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(5)</p>
              </Link>

              <Link to={"/blogs"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Business</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(2)</p>
              </Link>

              <Link to={"/blogs"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Technology</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(11)</p>
              </Link>

              <Link to={"/blogs"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Consulting</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(4)</p>
              </Link>

              <Link to={"/blogs"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Cyber Security</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(8)</p>
              </Link>
            </div>

            <div className='bg-[#f4f5f6] rounded-2xl p-[30px] mt-6'>
              <h3 className='text-[20px] font-semibold tracking-wider leading-loose text-blue-950/90 pb-2'>Recent Posts</h3>
              {
                currentIndex && currentIndex?.map((blog, i) => (
                  <Link key={i} to={`/blog-details/${blog?.id}`} className="flex gap-4 justify-start items-center py-3">
                    <div className='w-1/3'>
                      <img className='w-20 h-20 object-cover rounded-lg' src={blog?.img} alt={blog?.img} />
                    </div>
                    <div className='w-2/3'>
                      <h3 className='text-[16px] font-semibold text-blue-950/90'>{blog?.title?.slice(0, 38)}...</h3>
                      <p className='text-3 tracking-wider leading-loose text-blue-950/80'>{blog?.date}</p>
                    </div>
                  </Link>
                ))
              }
            </div>

            <div className='bg-[#f4f5f6] rounded-2xl p-[30px] mt-6'>
              <h3 className='text-[20px] font-semibold tracking-wider leading-loose text-blue-950/90 pb-2'>Tags</h3>
              {
                blogsData?.map((blog, i) => (
                  blog?.tags[i] && (
                    <button
                      key={i}
                      className="px-3 py-2 bg-white rounded-md text-md text-blue-950/80 hover:bg-blue-700 hover:text-white m-2"
                    >
                      {blog?.tags[i]}
                    </button>
                  )
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


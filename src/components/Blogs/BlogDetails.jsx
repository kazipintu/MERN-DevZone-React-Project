import React, { useRef, useState } from 'react';
import './Blogs.css';
import { MdBookmark, MdKeyboardArrowRight } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { RiCalendarFill, RiReplyFill } from 'react-icons/ri';
import { IoChatbox } from 'react-icons/io5';
import parse from 'html-react-parser';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';

export default function BlogDetails() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog Details";
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_74gfynj', 'template_x318ajb', form.current, {
        publicKey: 'Znxd_Shf7UA5AjS3N',
      })
      .then(
        () => {
          toast.success('We Received your message, Thank you!')
        },
        (error) => {
          toast.error('Failed...', error.text);
        },
      );
  };

  const location = useLocation();
  const pathName = location.pathname;
  //console.log(pathName);
  const dataId = pathName.split('/blog-details/')[1];
  //console.log(dataId);

  const [blogsData, setBlogsData] = React.useState();

  React.useEffect(() => {
    fetch('/blogsData.json')
      .then(response => response.json())
      .then(data => setBlogsData(data))
  }, []);

  const currentBlog = blogsData ? blogsData?.find(data => data?.id == dataId) : {};
  console.log(currentBlog);

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
            <h1 className="mx-auto w-3/4 text-7xl  text-white font-bold">{currentBlog?.title}</h1>
          </div>
          <div className="text-white flex justify-center gap-3 items-center tracking-wider">
            <Link to={"/"} className="text-slate-300">Home</Link>
            <MdKeyboardArrowRight className="size-6" />
            <Link to={"/"} className="text-slate-300">Blog</Link>
            <MdKeyboardArrowRight className="size-4" />
            <p>{currentBlog?.title}</p>
          </div>
        </div>
      </div>

      {/* blog-details */}
      <div className="container mx-auto px-[1%] lg:px-24 py-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* left-side section */}
          <div className='w-full md:col-span-2'>
            <img src={currentBlog?.img} alt={currentBlog?.img} />
            <div className='flex gap-8 pt-6 pb-6 border-b'>
              <div className='flex gap-3 items-center'>
                <RiCalendarFill className='size-5 text-blue-700' />
                <p className='text-3 tracking-wider leading-loose text-blue-950/80'>{currentBlog?.date}</p>
              </div>
              <div className='flex gap-3 items-center'>
                <MdBookmark className='size-5 text-blue-700' />
                <p className='text-3 tracking-wider leading-loose text-blue-950/80'>{currentBlog?.category}</p>
              </div>
              <div className='flex gap-3 items-center'>
                <IoChatbox className='size-5 text-blue-700' />
                <p className='text-3 tracking-wider leading-loose text-blue-950/80'>{currentBlog?.comments?.length} Comments</p>
              </div>
            </div>

            {/* blog content */}
            <div className='w-full'>
              {
                parse(`${currentBlog?.content}`)
              }
            </div>

            {/* tags */}
            <div className="w-full flex items-center gap-3 pt-8 pb-12 border-b">
              {
                currentBlog?.tags?.map((tag, i) => (
                  <button key={i} className='px-3 py-2 bg-[#e9e9e9] rounded-md text-md text-blue-950/80 hover:bg-blue-700 hover:text-white'>{tag}</button>
                ))
              }
            </div>

            {/* Comment section */}
            <div className="w-full pt-12">
              <h1 className='text-2xl font-semibold text-blue-950 tracking-wide leading-loose'>Comments:</h1>
              {
                currentBlog?.comments?.map((comment, i) => (
                  <div key={i}>
                    <div className="flex gap-4 items-start mt-7">
                      <img className='w-[90px] h-[90px] rounded-lg' src={comment?.userPhoto} alt={comment?.userPhoto} />
                      <div>
                        <p className='text-base text-left text-blue-950/80 tracking-wider leading-loose'>{comment?.comment}</p>
                        <h1 className='text-xl font-semibold text-blue-950 tracking-wide leading-loose pt-1'>{comment?.commentBy}</h1>
                        <p className='text-base text-left text-blue-950/80 tracking-wider leading-normal'>{comment?.commentDate}</p>
                        <div className='flex gap-3 items-center pt-3 pb-6'>
                          <RiReplyFill className='size-6 text-blue-700' />
                          <p className='text-base font-semibold text-blue-700 tracking-wider leading-loose'>Reply</p>
                        </div>

                        {/* Replies Section */}
                        {
                          comment?.replies?.map((reply, j) => (
                            <div key={j}>
                              <div className="flex gap-4 items-start">
                                <img className='w-[90px] h-[90px] rounded-lg' src={reply?.userPhoto} alt={reply?.userPhoto} />
                                <div>
                                  <p className='text-base text-left text-blue-950/80 tracking-wider leading-loose'>{reply?.comment}</p>
                                  <h1 className='text-xl font-semibold text-blue-950 tracking-wide leading-loose pt-1'>{reply?.commentBy}</h1>
                                  <p className='text-base text-left text-blue-950/80 tracking-wider leading-normal'>{reply?.commentDate}</p>
                                  <div className='flex gap-3 items-center pt-3 pb-6'>
                                    <RiReplyFill className='size-6 text-blue-700' />
                                    <p className='text-base font-semibold text-blue-700 tracking-wider leading-loose'>Reply</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* comment form */}
            <div>
              <form ref={form} onSubmit={sendEmail} className='w-full pt-8'>
                <h1 className='text-2xl font-semibold text-blue-950 tracking-wide leading-loose'>Leave a comments:</h1>
                <div className="flex gap-6">
                  <div className="w-full md:w-1/2 py-2">
                    <input type="text" name="name" className='bg-white rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-800/40 transition-all duration-400' placeholder='Your Name*' required />
                  </div>
                  <div className="py-2">
                    <input type="email" name="email" className='bg-white rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-800/40 transition-all duration-500 ease-in-out' placeholder='Email Address*' required />
                  </div>
                </div>
                <div className="py-2">
                  <textarea type="" name="message" className='bg-white rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-800/40 transition-all duration-500 ease-in-out h-[150px]' placeholder='Write us your comment' />
                </div>
                <div className="py-4">
                  <button type="submit" className='btn btn-animation py-6 w-[170px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                    <p className='animation-top2 w-full text-center'>Send Message</p>
                    <p className='animation-bottom2 w-full text-center'>Send Message</p>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right-side section */}
          <div className='w-full md:col-span-1 mt-12'>
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
              <Link to={"/blog-details/"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Uncategorized</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(18)</p>
              </Link>

              <Link to={"/blog-details/"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Marketing</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(5)</p>
              </Link>

              <Link to={"/blog-details/"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Business</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(2)</p>
              </Link>

              <Link to={"/blog-details/"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Technology</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(11)</p>
              </Link>

              <Link to={"/blog-details/"} className='flex justify-between items-center pb-3'>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>Consulting</p>
                <p className='text-[16px] tracking-wider leading-loose text-blue-950'>(4)</p>
              </Link>

              <Link to={"/blog-details/"} className='flex justify-between items-center pb-3'>
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

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Blog.css';

const Blog = () => {

  const blogData = [
    {
      id: 1,
      img: "https://optechanimation1.netlify.app/assets/images/blog/blog6.png",
      topic: "Technology",
      date: "26 June 2023",
      title: "Planning your online business goals with a specialist"
    },
    {
      id: 2,
      img: "https://optechanimation1.netlify.app/assets/images/blog/blog7.png",
      topic: "Technology",
      date: "26 June 2023",
      title: "Boost your startup business with our digital agency"
    },
    {
      id: 3,
      img: "https://optechanimation1.netlify.app/assets/images/blog/blog8.png",
      topic: "Technology",
      date: "26 June 2023",
      title: "Proactive customer experience in the business"
    }
  ]

  return (
    <div className="bg-stone-200 py-[100px]">
      <div className="container mx-auto lg:px-[100px]">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-4xl md:text-5xl text-left pb-12 font-semibold text-blue-900">Recent blog & articles <br /> about technology </h1>
          <div className="w-auto my-5 text-right">
            <button className='btn btn-animation w-[150px] lg:w-[200px] bg-[var(--primary)] text-white sm:text-sm md:text-md lg:text-lg border-0 outline-none hover:bg-[var(--primary)]'>
              <p className='animation-top w-[140px] lg:w-[200px] text-center'>View All Posts</p>
              <p className='animation-bottom w-[140px] lg:w-[200px] text-center'>View All Posts</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 items-center">
        {
          blogData?.map((blog, i) => (
            <div key={i} className="relative overflow-hidden sm:w-[354px] rounded-2xl">
              <div className="relative overflow-hidden">
                <img className="w-full h-[289px] object-cover  scale-100 hover:scale-110 transition-all duration-500" src={blog?.img} alt="blog-6" />
              </div>
              <div className="px-7">
                <div className="flex justify-start gap-2 items-center py-[25px]">
                  <p className="tracking-wide text-md text-blue-950/85">{blog?.topic}</p>
                  <span className="w-[5px] h-[5px] bg-blue-950/85 rounded-full"></span>
                  <p className="tracking-wide text-md text-blue-950/85">{blog?.date}</p>
                </div>
                <h4 className="w-3/4 tracking-wide text-xl font-bold text-blue-900">{blog?.title}</h4>
                <Link className="flex gap-2 items-center pt-5 text-[var(--primary)] font-semibold slider-learn" to={'/blogs'}><FaArrowRightLong className="withHover" /> Learn More <FaArrowRightLong className="withoutHover" /> </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Blog;
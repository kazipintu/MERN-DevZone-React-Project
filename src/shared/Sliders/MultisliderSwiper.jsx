import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { RiLinkedinFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';

const MultisliderSwiper = ({data}) => {
  return (
    <div className='w-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="mySwiper mb-5 pb-12"
      >
        {
          data?.map((dat, i) => (
            <SwiperSlide key={i} >
              <div className="w-full border hover:border-none shadow-xl hover:shadow-none bg-white rounded-2xl overflow-hidden relative team-card">

                <div className="overflow-hidden relative">
                  <img className="w-full object-cover h-[281px] hover:scale-110 scale-100 transition-all duration-500" src={dat?.img} alt="single-member" />
                </div>

                <div className="w-full bg-white py-5 px-5 tracking-wider">
                  <h4 className="text-xl font-bold text-blue-900 ">{dat?.name}</h4>
                  <p className="text-md text-blue-950/85 py-2">{dat?.role}</p>
                </div>

                <div className="social flex flex-col gap-3 absolute transition-all duration-1000">
                  <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><RiLinkedinFill className="size-[20px] social-icon text-blue-950" /></Link>
                  <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><FaTwitter className="size-[20px] social-icon text-blue-950" /></Link>
                  <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><AiFillInstagram className="size-[20px] social-icon text-blue-950" /></Link>
                </div>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
};

export default MultisliderSwiper;
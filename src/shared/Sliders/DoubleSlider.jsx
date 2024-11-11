import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
// import required modules
import { Grid, Pagination } from 'swiper/modules';
import './doubleSlider.css';

const DoubleSlider = ({ data }) => {


  return (
    <div className='w-full'>
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Grid, Pagination]}
        className="doubleslider"
      >

        {
          data?.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className='bg-white py-5 px-5 rounded-xl shadow flex'>
                <img className='w-12 h-12' src="https://optechanimation1.netlify.app/assets/images/v1/quote.svg" alt="" />

                <div className='py-5 px-5'>
                  <p>"{slide?.comment}"</p>

                  <div className='py-5'>
                    <div className="rating">
                      {
                        [...Array(Number(slide?.rating))].map((star, i) => (
                          <input key={i} type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                        ))
                      }

                    </div>
                  </div>
                  <h3 className='text-xl font-bold text-blue-900 '>{slide.name}</h3>
                  <p className='text-md font text-blue-950/85 py-2 font-semibold'>{slide.role}</p>
                </div>


              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default DoubleSlider;
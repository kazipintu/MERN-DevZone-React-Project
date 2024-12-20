import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import "./MultiItemsSlider.css";
import { FaArrowRightLong } from "react-icons/fa6";

const MultiItemsSlider = (props) => {

  const { sliderData } = props;
  console.log(sliderData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      },

    ]

  };

  return (
    <div className="w-full 2xl:container 
    mx-auto">
      <Slider {...settings}>
        {
          sliderData?.length > 0 && sliderData?.map((data, i) => (
            <div key={i} className="px-5 h-fit slider-card">
              <div className="bg-white shadow rounded-2xl p-7 h-full">
                <div className="w-[70px] h-[70px] flex rounded-md bg-blue-200/50 justify-center items-center slider-icon">
                  <img className="" src={data?.icon} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-blue-950 pt-7">{data?.title}</h3>
                <p className="text-md text-blue-950/90 pt-5">{data?.content?.goal?.substring(1, 50)}...</p>

                <Link className="flex gap-2 items-center pt-5 text-[var(--primary)] font-semibold slider-learn" to={'service/${data.id}'}><FaArrowRightLong className="withHover" /> Learn More <FaArrowRightLong className="withoutHover" /> </Link>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default MultiItemsSlider;
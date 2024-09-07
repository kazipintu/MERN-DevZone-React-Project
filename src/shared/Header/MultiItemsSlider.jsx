import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MultiItemsSlider = (props) => {

  const { sliderData } = props;
  console.log(sliderData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="w-full overflow-hidden 2xl:container 
    mx-auto">
      <Slider {...settings}>
        {
          sliderData?.length > 0 && sliderData?.map((data, i) => (
            <div key={i} className="px-5 h-fit">
              <div className="bg-white shadow rounded-md p-7 h-full">
                <div className="w-[80px] h-[80px] flex rounded-md bg-blue-200/50 justify-center items-center">
                  <img src={data?.icon} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-blue-950 pt-7">{data?.title}</h3>
                <p className="text-md tex-blue-950/95 pt-5">{data?.content?.goal?.substring(1, 80)}...</p>

                <Link className="block pt-5 text-[var(--primary)] font-semibold" to={'service/${data.id}'}> Learn More </Link>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default MultiItemsSlider;
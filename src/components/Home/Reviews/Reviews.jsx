import DoubleSlider from "../../../shared/Sliders/DoubleSlider";
import { reviewsData } from "../../../util/webData";

const Reviews = () => {
  return (
    <div className="w-full bg-stone-100 py-[50px]">
      <div className="container mx-auto lg:px-[50px]">
        <h1 className="text-4xl md:text-5xl text-center pb-12 w-1/2 mx-auto font-semibold text-blue-900 leading-2" >Don’t take our word, see <br />what our customers say</h1>

        <div className="w-full overflow-hidden">
          <DoubleSlider data={reviewsData} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
import MultiItemsSlider from "../../../shared/Header/MultiItemsSlider";
import { servicesData } from "../../../util/webData";

const ShortServices = () => {
  return (
    <div className="bg-stone-200 py-[50px]">
      <div className="container mx-auto px-[2%] lg:px-[100px]">
        <div className="head">
          <h1 className="text-4xl md:text-5xl text-center pb-12 w-1/2 mx-auto font-semibold text-blue-900">Our awesome services to give you success</h1>
        </div>
      </div>
      <MultiItemsSlider sliderData={servicesData} />
    </div>
  );
};

export default ShortServices; 
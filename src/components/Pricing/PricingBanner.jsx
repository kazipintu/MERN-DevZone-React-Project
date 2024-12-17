import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PricingBanner = () => {
  return (
    <div className="w-full bg-[url('/assets/breadcrumb.png')] pt-[150px] lg:pt-[230px] pb-[150px] ">
      <div className="text-center">
        <div className="mb-5 mt-[100px]">
          <h1 className="text-7xl  text-white font-bold">Princing plan</h1>
        </div>
        <div className="text-white flex justify-center gap-3 items-center tracking-wider">
          <Link to="/" className="text-slate-300">Home</Link>
          <MdKeyboardArrowRight className="size-6" />
          <p>Pricing plan</p>
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
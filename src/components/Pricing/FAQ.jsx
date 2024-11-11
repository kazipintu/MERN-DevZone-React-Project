import Accordion from "../../shared/Accordion/Accordion";
import { accordionData } from "../../util/accordionData";

const FAQ = () => {
  return (
    <div className="bg-stone-200 py-12 ">
      <div className="container mx-auto px-[1%] lg:px-[100px] py-[100px]">
        <div className="flex gap-8 justify-center items-center flex-col lg:flex-row">
          <div className="w-dull lg:w-1/2">
            <h1 className='text-5xl font-semibold text-blue-900 leading-[1.1] pb-6'>Have any <br /> questions? here <br /> some answers</h1>
            <p className="text-lg text-blue-900/85 leading-[1.8] pb-12">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only</p>
            <div className="py-4">
              <button className='btn btn-animation w-[150px] lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>Ask Any Question</p>
                <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>Ask Any Question</p>
              </button>
            </div>
          </div>
          <div className="w-dull lg:w-1/2">
            <Accordion questions={accordionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
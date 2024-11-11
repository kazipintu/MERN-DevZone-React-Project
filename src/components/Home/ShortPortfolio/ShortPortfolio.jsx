const ShortPortfolio = () => {
  return (
    <div className="container mx-auto px-0 lg:px-[50px] bg-stone-100 py-24">
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between 2xl:items-center">
          <div className="xl:w-1/2 ms-12 pt-7 2xl:pt-0 lg:pt-0 text-start">
            <h1 className="text-5xl font-semibold text-blue-900 leading-2 pb-6">Increasing business success with technology</h1>
            <p className="text-lg text-blue-900/95 leading-2 pb-2">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>
            <div className="py-4">

              {/* Progress bars */}
              <div className="pt-5 relative w-full">
                <h3 className="text-blue-900 text-md lg:text-lg font-semibold">IT Solution & Management</h3>
                <span className='absolute bottom-2 left-[82%] mb-2 py-2 text-md font-semibold text-blue-900'>
                  86%
                </span>
                <progress className="progress progress-primary w-full bg-slate-300" value="86" max="100"></progress>
              </div>
              <div className="pt-5 relative w-full">
                <span className='absolute bottom-2 left-[68%] mb-2 py-2 text-md font-semibold text-blue-900'>
                  72%
                </span>
                <h3 className="text-blue-900 text-md lg:text-lg font-semibold">Website & App Development</h3>
                <progress className="progress progress-primary w-full bg-slate-300" value="72" max="100"></progress>
              </div>
              <div className="pt-5 relative w-full">
                <h3 className="text-blue-900 text-md lg:text-lg font-semibold">SEO & Digital Marketing</h3>
                <span className='absolute bottom-2 left-[79%] mb-2 py-2 text-md font-semibold text-blue-900'>
                  83%
                </span>
                <progress className="progress progress-primary w-full bg-slate-300" value="83" max="100"></progress>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-1/2 px-5">


            <img className="w-[80%] ms-auto z-[1]" src="/assets/portfolio1.png" alt="" />



            <img className="w-1/2 -mt-[195px] ms-9 z-[2]" src="/assets/portfolio2.png" alt="" />

          </div>
        </div>
      </div>
    </div >
  );
};

export default ShortPortfolio;
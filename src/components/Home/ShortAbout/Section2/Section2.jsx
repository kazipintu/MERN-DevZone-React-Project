const Section2 = () => {
  return (
    <div className='pb-5 pt-20'>
      <div className="flex flex-col lg:flex-row justify-center 2xl:items-center">
        <div className="w-full xl:w-1/2">
          <div className="flex justify-start items-start">
            <img className="w-[80%] z-[1]" src="/assets/short-about-1.png" alt="" />
            <img className="mt-[100px] -mx-[50px] overflow-hidden" src="/assets/shape1.svg" alt="" />
          </div>
          <div className="ms-auto flex justify-end items-end">
            <img src="/assets/shape2.svg" alt="" />
            <img className="w-1/2 -mt-[280px] z-[2]" src="/assets/short-about-2.png" alt="" />
          </div>
        </div>
        <div className="xl:w-1/2 ms-12 pt-7 2xl:pt-0 lg:pt-0 text-center lg:text-start">
          <h1 className="text-5xl font-semibold text-blue-900 leading-2 pb-6">More than 25+ years we provide IT solutions</h1>
          <h3 className="text-xl font-semibold text-blue-900 leading-2 pb-6">During this time, we've built a reputation for excellent clients satisfaction as evidenced by our</h3>
          <p className="text-lg text-blue-900/95 leading-2 pb-6">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>
          <div className="py-4">
            <button className='btn btn-animation py-4 w-[150px] lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
              <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>More About Us</p>
              <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>More About Us</p>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section2;
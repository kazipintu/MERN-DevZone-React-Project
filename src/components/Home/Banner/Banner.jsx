const Banner = () => {
  return (
    <div className="w-full bg-[url('/assets/banner-bg.png')] bg-cover bg-center pt-[100px] sm:pt-[150px] lg:pt-[230px] pb-[100px]">
      <div className="container mx-auto px-3 md:px-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          <div className="w-full lg:w-1/2 text-center lg:text-start">
            <h5 className="text-2xl text-white font-semibold">We provide professional IT services</h5>
            <h1 className="2xl:text-8xl xl:text-6xl text-5xl text-white py-4 font-bold">Delivering tech solutions for your startups</h1>
            <h4 className="py-4 text-2xl text-white">We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.</h4>

            {/* "Work With Us" and "View Services buttons" */}
            <div className="flex justify-center lg:justify-start gap-4 py-4">
              <button className='btn btn-animation py-4 w-[150px] lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>Work With Us</p>
                <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>Work With Us</p>
              </button>
              <button className='btn btn-animation py-4 w-[150px] lg:w-[200px] bg-white text-[var(--fourth)] text-lg border-0 outline-none hover:bg-white'>
                <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>View Services</p>
                <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>View Services</p>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:ps-4">
            <img className="w-full" src="/assets/banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
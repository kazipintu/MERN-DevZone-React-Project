

const AboutServices = () => {
  return (
    <div className=" bg-stone-200 py-[100px]">
      <div className="container mx-auto px-[1%] lg:px-[50px]">
        <div className="flex flex-col lg:flex-row justify-between gap-8 2xl:items-center">

          <div className="w-full xl:w-1/2 pt-7 2xl:pt-0 lg:pt-0 text-center lg:text-start">
            <h1 className="text-3xl xl:text-5xl font-semibold text-blue-900 leading-2 pb-6">Providing IT solutions <br /> & services for <br /> startups </h1>

            <div className="flex justify-between gap-4 items-center py-5">
              <img className="p-5 rounded-lg bg-white" src="/assets/icon10.svg" alt="" />
              <div className="tracking-wide space-y-3 ">
                <h3 className="text-lg text-start font-semibold text-blue-900 leading-2">Easily Build Custom Reports And Dashboards</h3>
                <p className="text-md md:text-lg text-start text-blue-900/95 leading-2">Each demo built with Teba will look different. customize almost anything in the appearance of your</p>
              </div>
            </div>

            <div className="flex justify-between gap-4 items-center py-5">
              <img className="p-5 rounded-lg bg-white" src="/assets/icon1.svg" alt="" />
              <div className="tracking-wide space-y-3 ">
                <h3 className="text-start ext-lg font-semibold text-blue-900 leading-2">Amazing Expert Teams</h3>
                <p className="text-start text-md md:text-lg text-blue-900/95 leading-2">Each demo built with Teba will look different. customize almost anything in the appearance of your</p>
              </div>
            </div>

            <div className="flex justify-between gap-4 items-center py-6">
              <img className="p-5 rounded-lg bg-white" src="/assets/icon2.svg" alt="" />
              <div className="tracking-wide space-y-3 ">
                <h3 className="text-start text-lg font-semibold text-blue-900 leading-2">Urgent Support For Clients</h3>
                <p className="text-start text-md md:text-lg text-blue-900/95 leading-2">Each demo built with Teba will look different. customize almost anything in the appearance of your</p>
              </div>
            </div>

          </div>

          <div className="w-full xl:w-1/2">
            <div className="flex justify-end items-start">
              <img className="mt-[50px] -mx-[25px] overflow-hidden" src="/assets/shape3.svg" alt="" />
              <img className="w-[80%] z-[1]" src="/assets/thumb3.png" alt="" />
            </div>
            <div className="flex justify-start items-end -mt-[210px]">
              <img className="w-1/2 z-[2]" src="/assets/thumb4.png" alt="" />
              <img className="" src="/assets/shape2.svg" alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutServices;
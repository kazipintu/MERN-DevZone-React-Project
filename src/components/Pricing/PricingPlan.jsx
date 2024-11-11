import React from 'react';
import { pricingData } from '../../util/pricingData';
import { IoCheckmarkSharp } from 'react-icons/io5';

const PricingPlan = () => {

  return (
    <div className='bg-white py-[100px]'>
      <div className="container mx-auto px-[1%] lg:px-[100px}">
        <div className="grid gap-4 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            pricingData.map((pricing, i) => (
              <div key={i} className={`${pricing?.classes?.bg} border p-6 rounded-2xl`}>
                <h4 className={`${pricing?.classes?.textColor} text-xl font-semibold`}>{pricing?.title}</h4>
                <p className={`text-md md:text-md text-start ${pricing?.classes?.textColor} leading-2 py-4`}>{pricing?.subTitle}</p>
                <div className="flex gap-2 items-end py-4">
                  <h1 className={`text-7xl font-bold ${pricing?.classes?.textColor}`}>${pricing?.price} </h1>
                  <p className={`text-md md:text-md text-start ${pricing?.classes?.textColor}`}>/{pricing?.frequency}</p>
                </div>
                <ul className='py-4'>
                  {
                    pricing?.features?.map((feature, i) => (
                      <li className={`py-2 ${pricing?.classes?.textColor} flex gap-3`} key={i}><IoCheckmarkSharp className={`${pricing?.classes?.textColor} size-5`} /> {feature} </li>
                    ))
                  }
                </ul>
                <button className={`${pricing?.classes?.bgBtn} text-blue-950 hover:text-white hover:bg-blue-950 transition-all duration-300 w-full py-4 flex justify-center items-center rounded-md font-semibold`}>Select This Plan</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
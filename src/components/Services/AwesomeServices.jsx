import { useEffect, useState } from 'react';
import "./AwesomeServices.css";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
//import servicesData from '../../util/servicesData.json';

const AwesomeServices = () => {
  //const services = servicesData;

  const [servicesData, setServicesData] = useState();

  useEffect(() => {
    fetch("/servicesData.json")
      .then(res => res.json())
      .then(data => setServicesData(data))
  }, [])

  //console.log(servicesData);

  return (
    <div className='container px-[1%] lg:px-[100px] py-[50px]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {
          servicesData?.map((data, i) => (
            <div key={i} className='w-full flex gap-5 items-stretch rounded-xl bg-white p-6'>
              <div className="w-[70px] h-[70px] rounded-lg bg-[#eef1ff] hover:bg-[#2b4dff] flex justify-center items-center icon-box-service flex-shrink-0">
                <img className="w-9 h-9" src={data?.icon} alt="" />
              </div>
              <div className='w-auto flex-grow space-y-3'>
                <h1 className='text-2xl font-semibold text-blue-900'>{data?.title}</h1>
                <p >{data?.description}</p>
                <Link className="flex gap-2 items-center pt-5 text-[var(--primary)] font-semibold slider-learn" to={`/service-details/${data?.id}`}><FaArrowRightLong className="withHover" /> Learn More <FaArrowRightLong className="withoutHover" /> </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AwesomeServices;
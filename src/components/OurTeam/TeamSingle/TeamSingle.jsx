import React from 'react';
import '../ourTeam.css';
import { Link, useLocation } from 'react-router-dom';
import { MdEmail, MdKeyboardArrowRight, MdPhone } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import ContactForm from '../../../shared/ContactForm/ContactForm';
import WorkTogether from '../../About-us/WorkTogether/WorkTogether';

const TeamSingle = () => {

  const location = useLocation();
  const pathName = location.pathname;
  //console.log(pathName);
  const encodedName = pathName.split('/team-single/')[1];
  const singleName = encodedName && decodeURIComponent(encodedName);
  console.log(singleName);
  //console.log(encodedName);
  // const decodedName = 

  // /team-single/Marvin%20McKinney

  const [teamData, setTeamData] = React.useState()

  React.useEffect(() => {
    fetch("/teamsData.json")
      .then(res => res.json())
      .then(data => setTeamData(data))
  }, []);

  const teamSingle = teamData ? teamData?.find(data => data?.name == singleName) : {};
  //console.log(serviceDetails);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Team Single";
  }, [singleName])


  return (
    <div className='w-full'>

      {/* banner */}
      <div className="w-full bg-[url('/assets/breadcrumb.png')] pt-[200px] lg:pt-[230px] pb-[200px] ">
        <div className="text-center">
          <div className="mb-5 mt-[100px]">
            <h1 className="text-7xl  text-white font-bold">{teamSingle?.name}</h1>
          </div>
          <div className="text-white flex justify-center gap-3 items-center tracking-wider">
            <Link to="/" className="text-slate-300">Home</Link>
            <MdKeyboardArrowRight className="size-6" />
            <p>Team</p>
            <MdKeyboardArrowRight className="size-6" />
            <p>{teamSingle?.username}</p>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-[1%] lg:px-[100px] py-[100px]'>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="sm:w-full w-1/2">
            <img className='rounded-2xl w-[90%]' src={teamSingle?.photo} alt={teamSingle?.name} />
          </div>

          <div className="sm:w-full w-1/2">
            <h1 className='text-5xl font-semibold text-blue-900'>{teamSingle?.name}</h1>
            <h3 className='text-xl font-semibold text-blue-600 tracking-wider pt-3'>{teamSingle?.designation}</h3>
            <p className='pt-6 text-blue-950/80 text-md tracking-wider leading-loose'>{teamSingle?.description}</p>

            {/* social links */}
            <div className="pt-6 flex justify-start gap-2 items-center ">
              <MdPhone className='size-5 text-blue-900/100' />
              <Link to={`tel:${teamSingle?.phone}`} className=' text-blue-900/100 leading-loose'>{teamSingle?.phone}</Link>
            </div>

            <div className="flex justify-start gap-2 items-center ">
              <MdEmail className='size-5 text-blue-900/100' />
              <Link to={`mailto:${teamSingle?.email}`} className='text-blue-900/100 leading-loose'>{teamSingle?.email}</Link>
            </div>

            <div className="social pt-10 flex justify-start gap-3 items-center absolute transition-all duration-1000">

              {
                teamSingle?.social?.linkedIn && <Link to={teamSingle?.social?.linkedIn} className="bg-slate-200 hover:bg-blue-700 transition-all duration-200 rounded-md size-[44px] flex justify-center items-center"><RiLinkedinFill className="size-[20px] social-icon text-[#1e2656]" />
                </Link>
              }

              {
                teamSingle?.social?.twitter && <Link to={teamSingle?.social?.twitter} className="bg-slate-200 hover:bg-blue-700 transition-all duration-200 rounded-md size-[44px] flex justify-center items-center"><FaTwitter className="size-[20px] social-icon text-[#1e2656]" />
                </Link>
              }

              {
                teamSingle?.social?.instagram && <Link to={teamSingle?.social?.instagram} className="bg-slate-200 hover:bg-blue-700 transition-all duration-200 rounded-md size-[44px] flex justify-center items-center"><AiFillInstagram className="size-[20px] social-icon text-[#1e2656]" />
                </Link>
              }

              {
                teamSingle?.social?.facebook && <Link to={teamSingle?.social?.facebook} className="bg-slate-200 hover:bg-blue-700 transition-all duration-200 rounded-md size-[44px] flex justify-center items-center"><FaFacebookF className="size-[20px] social-icon text-[#1e2656]" />
                </Link>
              }

            </div>
            <div className='w-full pt-32 team-single'>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
      <WorkTogether />
    </div>
  );
};

export default TeamSingle;
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./ourTeam.css";
import WorkTogether from "../About-us/WorkTogether/WorkTogether";

const OurTeam = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Team";
  }, [])

  const [teamsData, setTeamsData] = React.useState()

  React.useEffect(() => {
    fetch("/teamsData.json")
      .then(response => response.json())
      .then(data => setTeamsData(data))
  }, [])

  return (
    <div className="w-full">

      {/* banner */}
      <div className="w-full bg-[url('/assets/breadcrumb.png')] pt-[200px] lg:pt-[230px] pb-[200px] ">
        <div className="text-center">
          <div className="mb-5 mt-[100px]">
            <h1 className="text-7xl  text-white font-bold">Our team</h1>
          </div>
          <div className="text-white flex justify-center gap-3 items-center tracking-wider">
            <Link to="/" className="text-slate-300">Home</Link>
            <MdKeyboardArrowRight className="size-6" />
            <p>Our team</p>
          </div>
        </div>
      </div>

      {/* teamsData.json */}
      <div className="py-[100px] flex flex-wrap justify-center gap-6 items-center bg-[#fdfdfd]">
        {
          teamsData?.map((member, i) => (
            <div key={i} className="w-full sm:w-[261px] bg-white border rounded-2xl overflow-hidden relative team-card hover:shadow-xl hover:border-transparent transition-all duration-300">

              <div className="overflow-hidden relative">
                <img className="w-full object-cover h-[281px] scale-100" src={member?.photo} alt="single-member" />
              </div>

              <div className="w-full bg-white py-5 px-5 tracking-wider">
                <Link to={`/team-single/${member?.name}`} className="text-xl font-bold text-blue-900 ">{member?.name}</Link>
                <p className="text-md text-blue-950/85 py-2">{member?.designation}</p>
              </div>

              <div className="social flex flex-col gap-3 absolute transition-all duration-1000">
                {
                  member?.social?.linkedIn && <Link to={member?.social?.linkedIn} className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center"><RiLinkedinFill className="size-[20px] social-icon text-blue-950" />
                  </Link>
                }

                {
                  member?.social?.twitter && <Link to={member?.social?.twitter} className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center"><FaTwitter className="size-[20px] social-icon text-blue-950" />
                  </Link>
                }

                {
                  member?.social?.instagram && <Link to={member?.social?.instagram} className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center"><AiFillInstagram className="size-[20px] social-icon text-blue-950" />
                  </Link>
                }

                {
                  member?.social?.facebook && <Link to={member?.social?.facebook} className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center"><FaFacebookF className="size-[20px] social-icon text-blue-950" />
                  </Link>
                }

              </div>
            </div>
          ))
        }
      </div>

      {/* WorkTogether */}
      <WorkTogether />

    </div>
  );
};

export default OurTeam;
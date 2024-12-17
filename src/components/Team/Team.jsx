import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Team.css";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import React from "react";

const Team = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Team";
  })

  const teamData = [
    {
      id: 1,
      img: "https://optechanimation1.netlify.app/assets/images/team/team1.png",
      name: "Marvin McKinney",
      role: "CEO & Founder",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      id: 2,
      img: "https://optechanimation1.netlify.app/assets/images/team/team2.png",
      name: "Sophia Rodriguez",
      role: "Creative Director",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      id: 3,
      img: "https://optechanimation1.netlify.app/assets/images/team/team3.png",
      name: "Marvin McKinney",
      role: "Lead Developer",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      id: 4,
      img: "https://optechanimation1.netlify.app/assets/images/team/team4.png",
      name: "Alexander Cameron",
      role: "Product Designer",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  ]

  return (
    <div className="bg-blue-950 py-[50px]">
      <div className="container mx-auto lg:px-[50px]">
        <h1 className="text-4xl md:text-5xl text-center pb-12 mx-auto font-semibold text-white">Our expert team is always <br /> ready to help you</h1>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          {
            teamData?.map((member, i) => (
              <div key={i} className="w-full sm:w-[261px] bg-white rounded-2xl overflow-hidden relative team-card">

                <div className="overflow-hidden relative">
                  <img className="w-full object-cover h-[281px] hover:scale-110 scale-100 transition-all duration-500" src={member?.img} alt="single-member" />
                </div>

                <div className="w-full bg-white py-5 px-5 tracking-wider">
                  <h4 className="text-xl font-bold text-blue-900 ">{member?.name}</h4>
                  <p className="text-md text-blue-950/85 py-2">{member?.role}</p>
                </div>

                <div className="social flex flex-col gap-3 absolute transition-all duration-1000">
                  <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><RiLinkedinFill className="size-[20px] social-icon text-blue-950" /></Link>
                  <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><FaTwitter className="size-[20px] social-icon text-blue-950" /></Link>
                  <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><AiFillInstagram className="size-[20px] social-icon text-blue-950" /></Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Team;
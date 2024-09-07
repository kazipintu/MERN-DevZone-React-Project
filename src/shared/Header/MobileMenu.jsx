import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const MobileMenu = (props) => {

  const { mobileMenuIsOpen, setMobileMenuIsOpen } = props;

  const [dropDownOpen, setDropDownOpen] = useState(false);



  return (
    <div className="w-full mobile-menu-bar sm:w-[350px] h-screen overflow-x-hidden overflow-y-scroll bg-white">

      {/* cross-button */}
      <div className="w-full border">
        <button onClick={() => setMobileMenuIsOpen(false)} className='p-3 bg-transparent hover:bg-transparent shadow-none outline-none block ms-auto border-s'><IoMdClose className='size-7 text-black' /></button>
      </div>

      {/* main-menu */}
      <div className="main-menu ps-2">
        <ul className='text-[var(--secondary)] text-lg'>
          <li className="w-full border-b py-2"><NavLink to={'/'} className="p-0" > Home </NavLink></li>
          <li onClick={() => {
            if (dropDownOpen) {
              setDropDownOpen(false)
            } else {
              setDropDownOpen(true)
            }
          }} className='w-full border-b py-2 cursor-pointer hover:text-[var(--primary)] flex flex-col'>
            <div className="flex flex-row justify-between items-center">
              Pages
              <RiArrowDownSFill className='menu-arrow size-6' />
            </div>

            {/* dropdown-menu */}
            <ul className={`w-full ps-[100px] pt-3 rounded-md ${dropDownOpen ? "block" : "hidden"}`}>
              <li className='py-2 border-b'><NavLink className="p-0" to={"/about"}> About Us </NavLink></li>
              <li className='py-2 border-b'><NavLink className="p-0" to={"/services"}> Services </NavLink></li>
              <li className='py-2 border-b'><NavLink className="p-0" to={"/pricing"}> Pricing </NavLink></li>
              <li className='py-2 border-b'><NavLink className="p-0" to={"/team"}> Team </NavLink></li>
              <li className='py-2 border-b'><NavLink className="p-0" to={"/shop"}> Shop </NavLink></li>
            </ul>
          </li>
          <li><NavLink className="w-full border-b py-2 cursor-pointer hover:text-[var(--primary)] flex justify-between items-center" to={'/portfolio'}>Portfolio<RiArrowDownSFill className='menu-arrow size-6' /></NavLink></li>
          <li><NavLink className="w-full border-b py-2 cursor-pointer hover:text-[var(--primary)] flex justify-between items-center" to={'/blogs'}>Blogs<RiArrowDownSFill className='menu-arrow size-6' /></NavLink></li>
          <li><NavLink className="w-full border-b py-2 cursor-pointer hover:text-[var(--primary)] flex justify-between items-center" to={'/contact'}>Contact</NavLink></li>
        </ul>
      </div>

    </div>
  );
};

export default MobileMenu;
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import TopHeader from './TopHeader';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { RiArrowDownSFill } from 'react-icons/ri';
import MobileMenu from './MobileMenu';

const Header = () => {

  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [searchOpen, SetSearchOpen] = useState(false);

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className='fixed right-0 left-0 top-0 z-[250] bg-transparent'>

      {/* TopHeader */}
      <div className={`container mx-auto px-[70px] ${scrolling && "hidden"}`}>
        <TopHeader />
      </div>
      <div className="w-full relative">
        <div className={`${scrolling ? "px-0" : "lg:px-[100px] px-[1%]"}`}>
          <nav className={`bg-white w-full lg:px-4 px-2 lg:py-4 rounded-md shadow`}>
            <div className={`container mx-auto ${scrolling && "lg:px-[100px] px-[1%]"}`}>
              <div className='flex items-center justify-between gap-6'>
                <div className="logo">
                  <Link to={'/'} className='block w-[120px]'>
                    <img className='w-full' src="/assets/logo-dark.svg" alt="https://optechanimation1.netlify.app/assets/images/logo/logo-dark.svg" />
                  </Link>
                </div>

                {/* main-menu */}
                <div className="main-menu hidden lg:block">
                  <ul className='flex gap-4 text-[var(--secondary)] text-lg'>
                    <li><NavLink to={'/'}>Home </NavLink></li>
                    <li className='relative dropdown cursor-pointer hover:text-[var(--primary)] flex items-center'>Pages<RiArrowDownSFill className='menu-arrow' />

                      {/* dropdown-menu */}
                      <ul className='absolute dropdown-menu z-[130] left-0 w-[200px] p-3 rounded-md drop-shadow-lg border bg-white'>
                        <li className='py-1'><NavLink className="cursor-pointer hover:text-[var(--primary)]" to={"/about"}>About Us</NavLink></li>
                        <li className='py-1'><NavLink className="cursor-pointer hover:text-[var(--primary)]" to={"/services"}>Services</NavLink></li>
                        <li className='py-1'><NavLink className="cursor-pointer hover:text-[var(--primary)]" to={"/pricing"}>Pricing</NavLink></li>
                        <li className='py-1'><NavLink className="cursor-pointer hover:text-[var(--primary)]" to={"/team"}>Team</NavLink></li>
                        <li className='py-1'><NavLink className="cursor-pointer hover:text-[var(--primary)]" to={"/shop"}>Shop</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink className="cursor-pointer hover:text-[var(--primary)] flex items-center" to={'/portfolio'}>Portfolio<RiArrowDownSFill /></NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-[var(--primary)] flex items-center" to={'/blogs'}>Blogs<RiArrowDownSFill /></NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-[var(--primary)]" to={'/contact'}>Contact</NavLink></li>
                  </ul>
                </div>

                {/* get and search buttons */}
                <div className="get hidden py-2 sm:flex flex-1 items-center justify-end gap-6 justify-self-end">
                  <div className="w-auto hidden md:block">
                    <button onClick={() => SetSearchOpen(true)}><FiSearch className='size-6 hover:text-[var(--primary)] transition-all duration-200' /></button>
                  </div>

                  <div className="w-auto">
                    <button className='btn btn-animation w-[150px] lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                      <p className='animation-top w-[140px] lg:w-[200px] text-center'>Get in Touch</p>
                      <p className='animation-bottom w-[140px] lg:w-[200px] text-center'>Get in Touch</p>
                    </button>
                  </div>
                </div>

                {/* menu-bar-button */}
                <div className="menu-bar-button block lg:hidden justify-self-end">
                  <button onClick={() => setMobileMenuIsOpen(true)}><HiOutlineBars3 className='size-8 text-black' /></button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className={`absolute ${searchOpen ? "top-0" : "-top-[600px]"} transition-all duration-300 left-0 right-0 w-full px-14 py-12 bg-white z-[150]`}>

        {/* cross-button */}
        <button onClick={() => SetSearchOpen(false)} className='btn btn-circle bg-transparent hover:bg-transparent shadow-none border-none outline-none block ms-auto mb-10'><IoMdClose className='size-7 text-black' /></button>

        {/* search-form */}
        <form className='w-full px-20'>
          <div className="flex justify-between border-b">
            <input className='bg-transparent border-none outline-none text-3xl p-4' placeholder='Search here....' type="search" name='search' />
            <button><FiSearch className='size-6 text-[var(--primary)] transition-all duration-200' /></button>
          </div>
        </form>
        <p className='px-24 test-lg pt-2'>Type above and press Enter to search. Press Close to cancel.</p>
      </div>

      {/* mobile-menu */}
      <div className={`w-full absolute transition-all duration-300 ${mobileMenuIsOpen ? "left-0 visible" : "-left-full invisible"}  top-0 right-0 bg-black/45`}>
        <MobileMenu mobileMenuIsOpen={mobileMenuIsOpen} setMobileMenuIsOpen={setMobileMenuIsOpen} />
      </div>

    </header>
  );
};

export default Header;
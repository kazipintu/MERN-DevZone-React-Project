import { Link } from 'react-router-dom';
import './Footer.css';
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-stone-100 py-[50px]'>
      <div className="container mx-auto px-4 lg:px-[100px] ">
        <div className="flex flex-col xl:flex-row flex-wrap justify-between gap-10 xl:gap-4 pb-6 xl:pb-[50px] border-b">

          <div className='w-full lg:w-[500px] space-y-3'> 
            <Link to="/" className='block'>
              <img src="/assets/logo-dark.svg" alt="" />
            </Link>
            <p className='py-4 text-wrap text-blue-950/85 text-md leading-2 tracking-wide'>Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few
            </p>
            <div className="social flex flex-row gap-3 flex-wrap transition-all duration-1000 xl:gap-3 justify-start">
              <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><RiFacebookFill className="size-[20px] social-icon text-blue-950" /></Link>
              <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><RiLinkedinFill className="size-[20px] social-icon text-blue-950" /></Link>
              <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><FaTwitter className="size-[20px] social-icon text-blue-950" /></Link>
              <Link className="bg-white hover:bg-blue-700 transition-all duration-200 rounded-md size-[40px] flex justify-center items-center" to="#"><AiFillInstagram className="size-[20px] social-icon text-blue-950" /></Link>
            </div>
          </div>

          <div className='w-full lg:w-auto px-4'>
            <h4 className='text-blue-800 font-semibold text-xl tracking-wider'>Quick Links</h4>
            <ul className='class flex flex-col gap-4 pt-5 text-lg text-blue-950/85'>
              <li className='cursor-pointer'>
                About
              </li>
              <li className='cursor-pointer'>
                Our Team
              </li>
              <li className='cursor-pointer'>
                Pricing
              </li>
              <li className='cursor-pointer'>
                Blogs
              </li>
              <li className='cursor-pointer'>
                Contact Us
              </li>
            </ul>
          </div>

          <div className='w-full lg:w-auto px-4'>
            <h4 className='text-blue-800 font-semibold text-xl tracking-wider'>Services</h4>
            <ul className='class flex flex-col gap-4 pt-5 text-lg text-blue-950/85'>
              <li className='cursor-pointer'>
                UI/UX Design
              </li>
              <li className='cursor-pointer'>
                App Development
              </li>
              <li className='cursor-pointer'>
                Digital Marketing
              </li>
              <li className='cursor-pointer'>
                Web Development
              </li>
              <li className='cursor-pointer'>
                Cyber Security
              </li>
            </ul>
          </div>

          <div className='w-full lg:w-auto px-4'>
            <h4 className='text-blue-800 font-semibold text-xl tracking-wider'>Information</h4>
            <ul className='class flex flex-col gap-4 pt-5 text-lg text-blue-950/85'>
              <li className='cursor-pointer'>
                Working Process
              </li>
              <li className='cursor-pointer'>
                Privacy Policy
              </li>
              <li className='cursor-pointer'>
                Terms & Conditions
              </li>
              <li className='cursor-pointer'>
                Faqs
              </li>
            </ul>
          </div>
        </div>

        <h1 className='pt-[50px]  text-blue-950/85 text-lg text-center tracking-wide'>Copyright © 2024 MirrorTheme. All rights reserved.</h1>
      </div>

    </footer>
  );
};

export default Footer;
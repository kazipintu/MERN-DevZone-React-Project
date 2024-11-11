import { RiMailFill } from 'react-icons/ri';
import { TiLocation } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import ContactForm from '../../../shared/ContactForm/ContactForm';

const ContactDetails = () => {
  return (
    <div className='bg-white w-full py-[150px]'>
      <div className="container mx-auto px-[1%] lg:px-[100px]">
        <div className="flex gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className='text-5xl font-semibold text-blue-900 leading-[1.1] pb-6'>Let’s build an awesome project together</h1>
            <p className="text-lg text-blue-900/85 leading-[1.8] pb-12">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>
            <div className="flex">
              <div className="w-full sm:w-1/2">
                <div className="bg-blue-900 rounded-md p-3 h-12 w-12 flex items-center justify-center">
                  <TiLocation className='size-7 text-white' />
                </div>
                <h5 className='text-2xl text-blue-900 font-semibold py-4'>Address</h5>
                <p className="text-lg text-blue-900/85">1791 Yorkshire Circle Kitty <br /> Hawk, NC 279499</p>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="bg-blue-900 rounded-md p-3 h-12 w-12 flex items-center justify-center">
                  <RiMailFill className='size-7 text-white' />
                </div>
                <h5 className='text-2xl text-blue-900 font-semibold py-4'>Contact</h5>
                <Link to="mailto:info@example.com" className="text-lg text-blue-900/85 block">info@example.com</Link>
                <Link to="tel:518-564-3200" className="text-lg text-blue-900/85 block">518-564-3200</Link>
              </div>
            </div>
            <div className='w-full bg-blue-950/20 h-px mt-6 '></div>
            <p className='pt-6 text-lg text-blue-900/85'>Office Hours: Mon - Sat: 8:00 AM - 10:00 PM</p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className='bg-stone-100 p-10 rounded-xl'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
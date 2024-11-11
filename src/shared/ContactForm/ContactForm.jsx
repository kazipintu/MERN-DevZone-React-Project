import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_74gfynj', 'template_x318ajb', form.current, {
        publicKey: 'Znxd_Shf7UA5AjS3N',
      })
      .then(
        () => {
          toast.success('We Received your message, Thank you!')
        },
        (error) => {
          toast.error("Message couldn't be sent")
        },
      );
  };

  return (
    <form ref={form} className='w-full'>
      <h4 className='text-2xl text-blue-900 font-semibold'>Fill The Contact Form</h4>
      <p className='text-lg text-blue-900/85 py-3'>Feel free to contact with us, we don't spam your email</p>
      <div className="flex gap-6">
        <div className="w-full md:w-1/2 py-2">
          <input type="text" className='bg-stone-100 rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-800/40 transition-all duration-400' placeholder='Your Name' />
        </div>
        <div className="w-full md:w-1/2 py-2">
          <input type="number" className='bg-stone-100 rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-800/40 transition-all duration-500 ease-in-out' placeholder='Phone Number' />
        </div>
      </div>
      <div className="py-2">
        <input type="email" className='bg-stone-100 rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-800/40 transition-all duration-500 ease-in-out' placeholder='Email Address' />
      </div>
      <div className="py-2">
        <textarea className='bg-stone-100 rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-800/40 transition-all duration-500 ease-in-out h-[150px]' placeholder='Write your message' />
      </div>
      <div className="py-4">
        <button className='btn btn-animation py-6 w-full bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
          <p className='animation-top2  w-full text-center'>Send Message</p>
          <p className='animation-bottom2 w-full text-center'>Send Message</p>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
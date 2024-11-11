import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import './Accordion.css';

const Accordion = ({ questions }) => {

  const [activeQuestion, setActiveQuestion] = React.useState(null);

  const handleQuestion = (index) => {
    setActiveQuestion(
      (prevIndex) => (prevIndex == index ? null : index)
    )
  }

  return (
    <div className='accordion w-full max-w-full m-0'>
      {
        questions?.map((question, i) => (
          <div key={i} className={`accordion-item border-y ${i == activeQuestion ? 'active' : ''} `}>
            <div role='button ' onClick={() => handleQuestion(i)} className='accordion-title flex justify-between items-center py-6'>
              <h3 className='font-semibold text-xl text-blue-900 capitalize cursor-pointer'>{question?.title}</h3>
              <GoPlus className={`size-7 ${i == activeQuestion ? 'rotate-45' : ''} transition-all duration-300`} />
            </div>
            <div className="accordion-content">
              {
                i == activeQuestion && <p className='text-lg text-blue-900/85 leading-[1.8] pb-4'>{question?.content}</p>
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Accordion;
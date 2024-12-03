import React, { useState } from "react";
import faq from '../assets/data/faq.js';
import { GrAdd, GrClose } from 'react-icons/gr';

const FAQ = () => {

  const [select, setSelect] = useState(null);
  
  const handleSelect = (id) => {
    setSelect(id === select ? null : id);
  }

  return (
    <div className="lg:flex lg:justify-center">
      <div className="overflow-x-hidden text-sm font-semibold sm:text-md lg:text-lg select-none font-sans lg:w-5/6 text-white flex justify-center items-center my-8">
        <div className="w-5/6 lg:w-full">
        <h1 className="lg:text-4xl text-lg font-bold mb-5">Frequently Asked Questions</h1>
        {
          // Check data is empty or not
          faq && faq.length > 0 ?
          
          faq.map((data, i) => {
            return (
              <div key={i}>
                <div className="flex justify-between items-center mb-1 p-4 sm:p-5 lg:p-6 bg-faqBlack border border-2 border-borderBlack cursor-pointer rounded-xl hover:bg-hoverBlack" onClick={() => handleSelect(data.id)}>
                  <h3>{data.title}</h3>
                  <span>{select === data.id ? <GrClose size={25} /> : <GrAdd size={25} />}</span>
                </div>
                
                <div>
                  {
                    select === data.id ? 
                    <p className="bg-faqBlack border border-2 border-borderBlack mb-1 p-5 rounded-xl ">{data.content}</p>
                    : null
                  }
                </div>
              </div>
            )
          })
          :
          <div>No Data Found</div>
        }
        </div>
      </div>
    </div>

  )
}

export default FAQ;
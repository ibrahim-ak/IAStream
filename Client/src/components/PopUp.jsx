import React from "react";
import Button from "./Button";
import { GoChevronRight } from 'react-icons/go';
import { GrFormClose } from "react-icons/gr";
import { Link } from 'react-router-dom';

const PopUp = ({serial, iconSrc, bgSrc, name, year, mature, category, type, description, OnClose}) => {
  return (
    <div id={serial} className={`flex justify-center items-center min-h-screen fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-600 shadow-xl`}>
      <div className="w-[670px] border border-1 border-gray-500 rounded-xl relative">
        <div>
          <img className="w-[670px] rounded-t-xl" src={bgSrc} alt={name} />
        </div>

        <div className="w-[250px] h-[150px] absolute bottom-[250px] left-10">
          <img className="object-contain w-[250px] h-[150px]" src={iconSrc} alt={"Default Icon"} />
        </div>

        <div onClick={OnClose} className="absolute top-3 rounded-full right-3 hover:bg-red-50 transition-all cursor-pointer duration-500">
          <GrFormClose color="black" size={50} />
        </div>


          <div className="bg-bgBlack rounded-b-xl flex flex-col sm:p-10 sm:pt-4 p-4">
            

              <ul className="flex gap-4">
                <li>{year}</li>
                <li>{mature}</li>
                <li>{type}</li>
                <li>{category}</li>
              </ul>
            <div className="pt-4 text-lg h-[100px]">{description}</div>
          
          <div className="pt-4">
          <Link to={'/signup'}><Button title="Get Started" classBtn={'px-6 py-2 bg-red-600 font-semibold text-xl hover:bg-red-700 transition-all duration-500 gap-2'} RightIcon={<GoChevronRight size={32} />} /></Link>
          <p>Create or restart your membership</p>
          </div>
      </div>
      
    </div>
    </div>
  )
}

export default PopUp;
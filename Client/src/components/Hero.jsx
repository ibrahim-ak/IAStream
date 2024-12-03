import React from "react";
import heroImage from '../assets/icons/Hero_Image.jpg';

const Hero = () => {
  return (
    <div className="relative my-10">
      <img src={heroImage} alt="Hero Image" className="w-full h-[700px] object-cover filter blur-lg" />
      
      <div className="absolute inset-0 p-10 sm:p-8 md:p-6 lg:p-4 flex justify-center items-center flex">
      <img src={heroImage} alt="Hero Image" className="w-full h-[600px] rounded-xl border-l border-t object-cover" />
      </div>
    </div>


  )
}

export default Hero;
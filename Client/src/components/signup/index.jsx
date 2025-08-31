import LoginImage from '../../assets/icons/signup-bg.jpg';
import IA from "../../assets/icons/IA";
import IASTREAM from "../../assets/icons/IASTREAM";
import { useState } from 'react';

const SignUp = () => {
  const [step, setStep] = useState(0);

  const title = ["Sign Up", "Verify OTP"];

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <input type="text" className="border border-white text-md pl-3 py-3 my-3 rounded-md placeholder-white bg-faqBlack bg-opacity-90" placeholder="Your Name"  />

            <input type="email" className="border border-white text-md pl-3 py-3 rounded-md placeholder-white bg-faqBlack bg-opacity-90" placeholder="Email Address"  />

            <input type="email" className="border border-white text-md pl-3 py-3 mt-3 rounded-md placeholder-white bg-faqBlack bg-opacity-90" placeholder="Mobile Number"  />

            <input type="password" placeholder="Password" className="border border-white text-md pl-3 py-3 rounded-md placeholder-white bg-faqBlack bg-opacity-90 my-3" />

            <button className="rounded-md bg-red-600 text-lg font-semibold py-2 hover:bg-red-700 transition-all duration-500" onClick={() => setStep(1)}>Sign Up</button>
            <div className="flex gap-2 mt-5">
              <input type="checkbox" className="w-4" /> <p className="text-sm">Remeber me</p>
            </div>

            <p className="text-sm opacity-90 my-5">Already have an IAStream account? <a href={'/auth/signin'}><span className="font-semibold opacity-100 cursor-pointer">Sign In.</span></a></p>
          </>
        )
      case 1:
        return (
          <>
            <input type="text" placeholder="Enter OTP" className="border border-white text-md pl-3 py-3 rounded-md placeholder-white bg-faqBlack bg-opacity-90 my-3" />

            <button className="rounded-md bg-red-600 text-lg font-semibold py-2 hover:bg-red-700 transition-all duration-500 mb-5"><a href='/'>Verify OTP</a></button>
          </>
        )
    }
  }

  return (
        <div>
      <div className="relative">
        <div className="hidden sm:block absolute top-5 left-10">
        <div>
        <div className="w-12 md:hidden"><IA /></div>
        <div className="hidden md:block w-32"><IASTREAM /></div>
      </div>
        </div>

        <img className="hidden sm:block sm:min-h-screen sm:object-cover sm:bg-center sm:bg-black sm:inset-0" src={LoginImage} alt={"Login Page Image"} />
        <div className="sm:object-contain sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2">
        <div className="overflow-x-hidden px-10 p-12 sm:px-15 sm:p-12 sm:pb-20 bg-black bg-opacity-90 flex flex-col justify-center items-center">
          {/* Container */}
          <div className="w-[280px] sm:w-[350px] flex flex-col ">
            <h1 className="text-4xl font-bold mb-6">{title[step]}</h1>
            {renderStepContent()}
            <p className="text-l_sm">This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <span className="text-blue-500">Learn more.</span></p>
          </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default SignUp;
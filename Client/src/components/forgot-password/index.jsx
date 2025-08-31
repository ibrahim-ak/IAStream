import LoginImage from '../../assets/icons/signup-bg.jpg';
import IA from "../../assets/icons/IA";
import IASTREAM from "../../assets/icons/IASTREAM";
import { useState } from 'react';

const ForgotPassword = () => {
  const [step, setStep] = useState(0);

  const title = ["Enter Email", "Verify OTP", "Reset Password", "Success"];

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <p className='text-sm mb-3'>Provide the email linked to your account, and we&apos;ll email you steps to create a new password.</p>
            <input type="email" className="border border-white text-md pl-3 py-3 my-3 rounded-md placeholder-white bg-faqBlack bg-opacity-90" placeholder="Email Address"  />

            <button className="rounded-md bg-red-600 text-lg font-semibold py-2 hover:bg-red-700 transition-all duration-500" onClick={() => setStep(1)}>Continue</button>
          </>
        )
      case 1:
        return (
          <>
            <p className='text-sm mb-3'>We&apos;ve sent a 6-digit OTP to your ammanrizwan00007@gmail.com.
                Please enter it below to verify your account.</p>
            <input type="email" className="border border-white text-md pl-3 py-3 my-3 rounded-md placeholder-white bg-faqBlack bg-opacity-90" placeholder="Enter OTP"  />

            <button className="rounded-md bg-red-600 text-lg font-semibold py-2 hover:bg-red-700 transition-all duration-500" onClick={() => setStep(2)}>Verify OTP</button>
          </>
        )
      case 2:
        return (
          <>
            <p className='text-sm mb-3'>Reset your password</p>
            <input type="email" className="border border-white text-md pl-3 py-3 rounded-md placeholder-white bg-faqBlack bg-opacity-90" placeholder="Enter New Password"  />
            <input type="email" className="border border-white text-md pl-3 py-3 my-3 rounded-md placeholder-white bg-faqBlack bg-opacity-90" placeholder="Enter Confirm Password"  />

            <button className="rounded-md bg-red-600 text-lg font-semibold py-2 hover:bg-red-700 transition-all duration-500" onClick={() => setStep(3)}>Reset Password</button>
          </>
        )
      case 3:
        return (
          <>
            <p className='text-sm mb-3'>Your password has been reset successfully. You can now login with your new password.</p>
            <button className="rounded-md bg-red-600 text-lg font-semibold py-2 hover:bg-red-700 transition-all duration-500" onClick={() => setStep(2)}><a href='/auth/signin'>Sign In</a></button>
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
              <h1 className="text-4xl font-bold my-3">{title[step]}</h1>
              {renderStepContent()}

            <p className="text-sm opacity-90 my-5">Remember Your Password? <a href={'/auth/signin'}><span className="font-semibold opacity-100 cursor-pointer">Sign In.</span></a></p>

            <p className="text-l_sm">This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <span className="text-blue-500">Learn more.</span></p>
          </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default ForgotPassword;
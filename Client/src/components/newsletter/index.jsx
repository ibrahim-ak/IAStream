import CustomButton from '../custom-button';
import { GoChevronRight } from 'react-icons/go';
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="flex justify-center">
    
    <div className="flex flex-col items-center w-5/6">
      <div className="mb-4">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:flex sm:gap-4 sm:items-center">
        <div>
          <input type="email" placeholder="Email Address" className="bg-bgBlack border border-1 border-borderBlack rounded-full py-4 pl-6 placeholder-gray-500 w-96 sm:w-72" />
        </div>
        <Link to={'/auth/signup'}><CustomButton title="Get Started" classBtn={'px-6 py-2 bg-red-600 font-semibold text-xl hover:bg-red-700 transition-all duration-500 gap-2'} RightIcon={<GoChevronRight size={32} />} /></Link>
      </div>
    </div>

    </div>
  )
}

export default NewsLetter;
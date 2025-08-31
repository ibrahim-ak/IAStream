import CustomButton from "../custom-button";
import { Link } from "react-router-dom";

const MemberShip = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
      <Link to={'/auth/signup'}><CustomButton title="Get Started" classBtn={'font-semibold text-md px-8 py-2 bg-red-600 hover:bg-red-700 transition-all duration-500 mb-2'} /></Link>
      <p className="text-md">Create or restart your membership</p>
      </div>
    </div>
  )
}

export default MemberShip;
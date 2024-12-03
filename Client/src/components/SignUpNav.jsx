import React from "react";
import Button from './Button';

const SignUpNav = () => {
  return (
    <div className="overflow-x-hidden p-6 flex justify-between items-center">
      <div className="bg-white text-black">
        Logo
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div>
        <select className="rounded-full px-4 py-1 border border-slate-700 border-2 font-semibold bg-bgBlack">
          <option value="English">English</option>
          <option value="Global">Global</option>
        </select>
        </div>
        <div>
        <Button title="Sign In" classBtn={'px-4 py-1 bg-white text-black font-semibold text-sm hover:bg-gray-300 transition-all duraiton-500'} />
        </div>
      </div>
    </div>
  )
}

export default SignUpNav;
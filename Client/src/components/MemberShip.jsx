import React from "react";
import Button from "./Button";

const MemberShip = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
      <Button title="Get Started" classBtn={'font-semibold text-md px-8 py-2 bg-red-600 hover:bg-red-700 transition-all duration-500 mb-2'} />
      <p className="text-md">Create or restart your membership</p>
      </div>
    </div>
  )
}

export default MemberShip;
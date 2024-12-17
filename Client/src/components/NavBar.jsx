import React from "react";
import Button from './Button';
import { Link } from "react-router-dom";
import IA from '../assets/icons/IA';
import IASTREAM from "../assets/icons/IASTREAM";

const NavBar = () => {
  return (
    <div className="overflow-x-hidden p-6 pl-8 flex justify-between items-center">
      <div>
        <div className="w-12 md:hidden"><IA /></div>
        <div className="hidden md:block w-32"><IASTREAM /></div>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div>
        <select className="rounded-full px-4 py-1 border border-slate-700 border-2 font-semibold bg-bgBlack">
          <option value="English">English</option>
          <option value="Global">Global</option>
        </select>
        </div>
        <div>
       <Link to={'/signin'}><Button title="Sign In" classBtn={'px-4 py-1 bg-white text-black font-semibold text-sm hover:bg-gray-300 transition-all duraiton-500'} /></Link> 
        </div>
      </div>
    </div>
  )
}

export default NavBar;
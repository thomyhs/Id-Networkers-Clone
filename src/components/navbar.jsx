import { Link } from "react-router-dom";
import { useState } from "react"; 

function Navbar() {
    return (
      <>
      <nav className="w-full shadow-lg px-[75px] bg-white fixed top-0 z-[999]">
        <div className="flex items-center justify-between mx-9">
          <div className="flex gap-9 items-center py-3 px-2">
            <img src="src/assets/logo_idn.png" className="w-auto h-[56px] mr-9 cursor-pointer" />
            <div className="flex space-x-5">
              <Link to="/" className="hover:bg-slate-200 p-3 rounded-lg text-sm text-[#939597] cursor-pointer active:border-b-red-600" True>Beranda</Link>
              <div className="flex flex-col p-3 hover:bg-slate-200 rounded-lg text-sm group">
              <p className="flex items-center relative hover:bg-slate-200 text-[#939597]">Pilihan Kursus 
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" height="0.875em" viewBox="0 0 448 512"><path fill="#939597" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
              </p>
                <ul className="bg-white absolute hidden border-2 mt-[34px] rounded-lg space-y-2 py-2 px-4 text-start group-hover:block">
                  <div className="flex flex-col">
                    <Link className="hover:bg-slate-200 py-1 pl-2 pr-5 rounded-md cursor-pointer" to="/kog">Kursus Online Gratis</Link>
                    <Link className="hover:bg-slate-200 py-1 pl-2 pr-5 rounded-md cursor-pointer" to="/kop">Kursus Online Premium</Link>
                    <Link className="hover:bg-slate-200 py-1 pl-2 pr-5 rounded-md cursor-pointer" to="/training">Training Offline</Link>
                  </div>
                </ul>
              </div>
              <p className="hover:bg-slate-200 p-3 text-[#939597] rounded-lg text-sm cursor-pointer">Group Diskusi</p>
            </div>
          </div>
          <div className="flex ">
            <div className="inline-block space-x-5">
              <Link to="/login"><button type="submit" className="text-gray-500 hover:text-orange-500 text-sm">Sign In</button></Link>
              <Link to="/signup"><button type="submit" className=" bg-blue-600 hover:bg-blue-800 px-5 py-2 text-white font-medium text-sm rounded-full">Sign Up</button></Link>
            </div>
          </div>
        </div>
      </nav>
      </>
    )
  }

  export default Navbar;
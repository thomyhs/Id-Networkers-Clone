import { useState } from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUp from "./signup";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


function Home() {
    return (
      <div style={{fontFamily: "Roboto"}} className="relative">
      
        <Navbar/>
        <div className="bg-[#F3F5F8] rounded-b-3xl pt-[190px]">
          <Section/>
          <div className="fixed flex flex-col gap-4 right-6 bottom-9 items-center z-[999]">
            <div className="bg-[#CFD0D3] hover:bg-[#F1B6C7] p-3 py-5 rounded-full cursor-pointer">
              <img src="src/assets/tdots.svg" className="hover:bg-[#F1B6C7]" alt="" />
            </div>
            
            <button className="bg-[#EB2455] p-3 rounded-full hover:animate-pulse">
              <div className="bg-[#EB2455] p-1">
                <img src="src/assets/bchat.svg" className="w-[30px] animate-none" fill="#FFFFFF" />
              </div>
            </button>
          </div>
        </div>
        <SecondSection/>
        <Footer/>
      </div>
    )
}



function Section() {
  return (
    <>
    <div className="mx-[75px]">
      <div className="grid grid-cols-2 container mx-7  scale-" style={{fontFamily:"Roboto"}}>
        <div className="w-3/4 mt-10">
          <hr className="border-[#F34848] border-2 w-11"/>
          <div className="pt-7">
            <h1 className="text-[#F34848] text-base font-semibold" >Selamat datang di</h1>
          </div>
          <div className="leading-none pt-5">
            <p className="text-[#F34848] text-[60px] font-bold">Learning Portal ID-Networkers</p>
          </div>
          <div className="pt-5 ">
            <p className="text-[#7A7A7A] font-medium text-base">Temukan berbagai materi kursus IT di sini dan selesaikan quiznya untuk mendapatkan sertifikat.</p>
          </div>
          <div className="pt-10">
            <button className="flex items-center bg-[#F34848] hover:bg-[#CD3131] px-5 py-2 rounded-full font-bold text-[15px] text-white">Mulai Belajar <img src="src/assets/angdow.svg" className="-rotate-90" /></button>
          </div>
        </div>
        <img src="src/assets/img_idn.png" className="" />
      </div>
    </div>
    </>

  )
}

function SecondSection(){
  return (
    <>
      <div className="flex justify-center mt-[90px]">
        <div>
          <p className=" text-[#F34848] font-semibold text-[20px]">Kursus IT Gratis Terbaru</p>
          <hr className="mx-[70px] border-2 border-[#F34848] mt-8"/>
        </div>
      </div>
      <div className="mt-[52px] mx-20 gap-5 grid grid-cols-4 min-w-fit">
        <div className="relative w-fit rounded-xl shadow-lg bg-white hover:drop-shadow-xl">
          <img src="src/assets/thumbnail_idn.png" className="rounded-t-xl cursor-pointer" />
          <span className="absolute bg-yellow-400 text-[11px] font-medium items-center text-white pt-1 px-3 top-5 rounded-r-xl">FREE</span>
          <div className="px-6 py-4">
            <p className="text-[12px] mb-2 font-light text-[#A3A5A9] ">5 Lessons</p>
              <h2 className="font-bold leading-7 text-[22px] mb-5 cursor-pointer hover:text-[#F34848] text-black">Cisco Dasar</h2>
              <div className="flex items-center gap-2 pb-8">
                <img src="src/assets/brand_idn.jpg" className="rounded-full w-max h-7" />
                <p className="text-gray-700 text-xs font-medium w-fit cursor-pointer hover:text-[#F34848]">
                  ID-Networkers (IDN.ID)
                </p>
              </div>
          </div>
        </div>
        <div className="relative w-fit rounded-xl shadow-lg bg-white hover:drop-shadow-xl">
          <img src="src/assets/thumbnail_idn.png" className="rounded-t-xl cursor-pointer" />
          <span className="absolute bg-yellow-400 text-[11px] font-medium items-center text-white pt-1 px-3 top-5 rounded-r-xl">FREE</span>
          <div className="px-6 py-4">
            <p className="text-[12px] mb-2 font-light text-[#A3A5A9] ">8 Lessons</p>
              <h2 className="font-bold leading-7 text-[22px] mb-5 cursor-pointer hover:text-[#F34848]">Jaringan Dasar</h2>
              <div className="flex items-center gap-2 pb-8">
                <img src="src/assets/brand_idn.jpg" className="rounded-full w-max h-7" />
                <p className="text-gray-700 text-xs font-medium w-fit cursor-pointer hover:text-[#F34848]">
                  ID-Networkers (IDN.ID)
                </p>
              </div>
          </div>
        </div>
        <div className="relative w-fit rounded-xl shadow-lg bg-white hover:drop-shadow-xl">
          <img src="src/assets/thumbnail_idn.png" className="rounded-t-xl cursor-pointer" />
          <span className="absolute bg-yellow-400 text-[11px] font-medium items-center text-white pt-1 px-3 top-5 rounded-r-xl">FREE</span>
          <div className="px-6 py-4">
            <p className="text-[12px] mb-2 font-light text-[#A3A5A9] ">19 Lessons</p>
              <h2 className="font-bold leading-7 text-[22px] mb-5 cursor-pointer hover:text-[#F34848]">Linux Dasar</h2>
              <div className="flex items-center gap-2 pb-8">
                <img src="src/assets/brand_idn.jpg" className="rounded-full w-max h-7" />
                <p className="text-gray-700 text-xs font-medium w-fit cursor-pointer hover:text-[#F34848]">
                  ID-Networkers (IDN.ID)
                </p>
              </div>
          </div>
        </div>
        <div className="relative w-fit rounded-xl shadow-lg bg-white hover:drop-shadow-xl">
          <img src="src/assets/thumbnail_idn.png" className="rounded-t-xl cursor-pointer" />
          <span className="absolute bg-yellow-400 text-[11px] font-medium items-center text-white pt-1 px-3 top-5 rounded-r-xl">FREE</span>
          <div className="px-6 py-4">
            <p className="text-[12px] mb-2 font-light text-[#A3A5A9] ">26 Lessons</p>
              <h2 className="font-bold leading-7 text-[22px] mb-5 cursor-pointer hover:text-[#F34848]">Mikrotik Dasar</h2>
              <div className="flex items-center gap-2 pb-8">
                <img src="src/assets/brand_idn.jpg" className="rounded-full w-max h-7" />
                <p className="text-gray-700 text-xs font-medium w-fit cursor-pointer hover:text-[#F34848]">
                  ID-Networkers (IDN.ID)
                </p>
              </div>
          </div>
        </div>
        <div className="relative w-fit rounded-xl shadow-lg bg-white hover:drop-shadow-xl">
          <img src="src/assets/thumbnail_idn.png" className="rounded-t-xl cursor-pointer" />
          <span className="absolute bg-yellow-400 text-[11px] font-medium items-center text-white pt-1 px-3 top-5 rounded-r-xl">FREE</span>
          <div className="px-6 py-4">
            <p className="text-[12px] mb-2 font-light text-[#A3A5A9] ">20 Lessons</p>
              <h2 className="font-bold leading-7 text-[22px] mb-5 cursor-pointer hover:text-[#F34848]">Pemrograman Dart Dasar</h2>
              <div className="flex items-center gap-2 pb-8">
                <img src="src/assets/brand_idn.jpg" className="rounded-full w-max h-7" />
                <p className="text-gray-700 text-xs font-medium w-fit cursor-pointer hover:text-[#F34848]">
                  ID-Networkers (IDN.ID)
                </p>
              </div>
          </div>
        </div>
        <div className="relative w-fit rounded-xl shadow-lg bg-white hover:drop-shadow-xl">
          <img src="src/assets/thumbnail_idn.png" className="rounded-t-xl cursor-pointer" />
          <span className="absolute bg-yellow-400 text-[11px] font-medium items-center text-white pt-1 px-3 top-5 rounded-r-xl">FREE</span>
          <div className="px-6 py-4">
            <p className="text-[12px] mb-2 font-light text-[#A3A5A9] ">6 Lessons</p>
              <h2 className="font-bold leading-7 text-[22px] mb-5 cursor-pointer hover:text-[#F34848] ">Simulasi Jaringan dengan PNETlab</h2>
              <div className="flex items-center gap-2 pb-8">
                <img src="src/assets/brand_idn.jpg" className="rounded-full w-max h-7" />
                <p className="text-gray-700 text-xs font-medium w-fit cursor-pointer hover:text-[#F34848]">
                  ID-Networkers (IDN.ID)
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}





export default Home;
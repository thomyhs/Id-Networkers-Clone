import { useState } from "react"

function App() {
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

function Navbar() {
  return (
    <>
    <nav className="w-full shadow-lg px-[75px] bg-white fixed top-0 z-[999]">
      <div className="flex items-center justify-between mx-9">
        <div className="flex gap-9 items-center py-3 px-2">
          <img src="src/assets/logo_idn.png" className="w-auto h-[56px] mr-9 cursor-pointer" />
          <div className="flex space-x-5">
            <p href="" className="hover:bg-slate-200 p-3 rounded-lg text-sm text-[#939597] cursor-pointer">Beranda</p>
            <div className="flex flex-col p-3 hover:bg-slate-200 rounded-lg text-sm group">
            <p className="flex items-center relative hover:bg-slate-200 text-[#939597]">Pilihan Kursus 
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" height="0.875em" viewBox="0 0 448 512"><path fill="#939597" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            </p>
              <ul className="bg-white absolute hidden border-2 mt-[34px] rounded-lg space-y-2 py-2 px-4 text-start group-hover:block">
                <li className="hover:bg-slate-200 py-1 pl-2 pr-5 rounded-md cursor-pointer">Kursus Online Gratis</li>
                <li className="hover:bg-slate-200 py-1 pl-2 pr-5 rounded-md cursor-pointer">Kursus Online Premium</li>
                <li className="hover:bg-slate-200 py-1 pl-2 pr-5 rounded-md cursor-pointer">Training Offline</li>
              </ul>
            </div>
            <p className="hover:bg-slate-200 p-3 text-[#939597] rounded-lg text-sm cursor-pointer">Group Diskusi</p>
          </div>
        </div>
        <div className="flex ">
          <div className="inline-block space-x-5">
            <button type="submit" className="text-gray-500 hover:text-orange-500 text-sm">Sign In</button>
            <button type="submit" className=" bg-blue-600 hover:bg-blue-800 px-5 py-2 text-white font-medium text-sm rounded-full">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
    </>
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
              <h2 className="font-bold leading-7 text-[22px] mb-5 cursor-pointer hover:text-[#F34848]">Cisco Dasar</h2>
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

function Footer() {
  const [hoverIcon, SetHoverIcon] = useState(false);

  return (
    <>
      <div className="mt-[100px] mx-[75px] flex justify-between">
        <div className="py-10 flex gap-7 items-center text-sm text-[#5A5A5A]">
          <p>© 2023 - Learning Portal ID-Networkers</p>
          <p className="hover:text-blue-400 cursor-pointer">FAQ</p>
          <p className="hover:text-blue-400 cursor-pointer">Terms & Conditions</p>
          <p className="hover:text-blue-400 cursor-pointer">Delivery Policy</p>
          <p className="hover:text-blue-400 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-blue-400 cursor-pointer">Contact</p>
        </div>
        <div className="flex items-center gap-3">
            <a title="Email" className=" p-1 rounded-full bg-[#5A5A5A] hover:bg-[#385DFF] cursor-pointer"><img src="src/assets/email-svgrepo-com.svg" className="" /></a>
            <a title="Facebook" className=" rounded-full bg-[#5A5A5A] hover:bg-[#385DFF] cursor-pointer"><img src="src/assets/facebook-svgrepo-com.svg" className="w-6"/></a>
            <a title="Instagram" className="p-1 rounded-full bg-[#5A5A5A] hover:bg-[#385DFF] cursor-pointer"><img src="src/assets/instagram-svgrepo-com.svg" className="w-4"/></a>
            <a title="Linkedin" className="p-1 rounded-full bg-[#5A5A5A] hover:bg-[#385DFF] cursor-pointer"><img src="src/assets/linkedin-svgrepo-com.svg" className="w-4"/></a>
            <a title="Youtube" className="p-1 rounded-full bg-[#5A5A5A] hover:bg-[#385DFF] cursor-pointer"><img src="src/assets/youtube-svgrepo-com.svg" className="w-4"/></a>
        </div>
      </div>
    </>
  )
}

export default App;
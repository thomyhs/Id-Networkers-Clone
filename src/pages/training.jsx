function Training() {
    return (
        <>
            <nav className="">
                <div className="flex items-center justify-around py-4 mx-16">
                    <img src="src/assets/logo_idn.png" className="w-auto h-[56px] mr-9 cursor-pointer"/>
                    <div className="flex space-x-7 items-center">
                        <a href="">Home</a>
                        <a href="">Pilihan Training</a>
                        <a href="">Jadwal Training</a>
                        <div className="flex flex-col py-3 rounded-lg text-sm group">
                            <p className="flex items-center relative">Special Event
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" height="0.875em" viewBox="0 0 448 512"><path fill="#939597" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            </p>
                            <ul className="bg-white absolute hidden border-2 mt-[34px] rounded-lg space-y-2 py-2 px-4 text-start group-hover:block">
                                <div className="border-b-[1px] pb-1">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Promo</li>
                                </div>
                                <div className="border-b-[1px] pb-1">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Training Online Gratis</li>
                                </div>
                                <div className="border-b-[1px] pb-1">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Affiliate Program</li>
                                </div>
                                <div className="border-b-[1px] pb-1">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Free Webinar</li>
                                </div>
                                <div className="border-b-[1px] pb-1">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Mini Class</li>
                                </div>
                                <div className="border-b-[1px] pb-1">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Nge-Lab Bareng</li>
                                </div>
                                <div className="border-b-[1px] pb-1">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Beasiswa</li>
                                </div>
                                <div className="border-b-[1px] pb-1">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Program Khusus Guru</li>
                                </div>
                                <div className="border-b-[1px] pb-1">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">IDN Education Partnership</li>
                                </div>
                            </ul>
                        </div>
                        <div className="flex flex-col py-3 rounded-lg text-sm group">
                            <p className="flex items-center relative">About Us
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" height="0.875em" viewBox="0 0 448 512"><path fill="#939597" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            </p>
                            <ul className="bg-white absolute hidden border-2 mt-[34px] rounded-lg space-y-2 py-2 px-4 text-start group-hover:block">
                                <div className="border-b-[1px] p-2">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Contact</li>
                                </div>
                                <div className="border-b-[1px] p-2">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Profil IDN</li>
                                </div>
                                <div className="border-b-[1px] p-2">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Our Trainer</li>
                                </div>
                                <div className="border-b-[1px] p-2">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">FAQ</li>
                                </div>
                                <div className="border-b-[1px] p-2">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Blog IDN</li>
                                </div>
                                <div className="border-b-[1px] p-2">
                                   <li className="hover:text-[#F1434F] rounded-md cursor-pointer">Toko IDN</li>
                                </div>
                            </ul>
                        </div>
                        <button type="submit" className="border-solid bg-[#f23d49] text-white py-[18px] px-[35px] uppercase rounded-md ">Daftar Training</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Training;
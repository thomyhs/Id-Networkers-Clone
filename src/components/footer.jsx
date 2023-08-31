function Footer() {  
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

export default Footer
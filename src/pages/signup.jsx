function SignUp () {
    return (
        <>
        <div className="bg-[url('src/assets/bg-signup.png')] bg-cover h-auto">
            <div className="container mx-auto">
                <div className="flex flex-col py-[117px]">
                    <img src="src/assets/logo_idn.png" className="w-[300px] h-auto mx-auto mb-5" />
                    <div className="bg-white w-1/3 mx-auto py-11">
                        <div className="pb-6">
                            <p className="text-center w-auto mx-auto px-20 font-semibold text-[#4D5C6D]">Isi form pendaftaran di bawah ini, dan jadilah IT Expert bersama kami.</p>
                        </div>
                        <div className="px-[30px]">
                            <label htmlFor="nama" className="font-bold">Nama Lengkap (akan muncul di sertifikat) *</label>
                            <input type="text" name="nama" id="" className="w-full mt-1 mb-6 py-[6px] px-[10px] outline-none rounded-sm border-[1px] border-[#ccc]" />
                        </div>
                        <div className="px-[30px]">
                            <label htmlFor="nama" className="font-bold">Nomor Whatsapp (contoh: 0896..............) *</label>
                            <input type="text" name="nama" id="" className="w-full mt-1 mb-6 py-[6px] px-[10px] outline-none rounded-sm border-[1px] border-[#ccc]" />
                        </div>
                        <div className="px-[30px]">
                            <label htmlFor="nama" className="font-bold">Email *</label>
                            <input type="text" name="nama" id="" className="w-full mt-1 mb-6 py-[6px] px-[10px] outline-none rounded-sm border-[1px] border-[#ccc]" />
                        </div>
                        <div className="px-[30px]">
                            <label htmlFor="nama" className="font-bold">Password *</label>
                            <input type="text" name="nama" id="" className="w-full mt-1 mb-6 py-[6px] px-[10px] outline-none rounded-sm border-[1px] border-[#ccc]" />
                        </div>
                        <div className="px-[30px]">
                            <button type="submit" className="bg-[#EB4E4F] text-white font-semibold text-[15px] py-[10px] px-10 rounded-full w-full">Klik untuk daftar akun</button>
                        </div>
                        <div className="px-[30px]">
                        <p className="text-center px-10 text-sm mt-9">Sudah punya akun? silahkan <span><a href="" className="text-[#F0754F]">Login / Sign In</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;
function CardKop(props) {
    return (
            <div className="relative w-fit rounded-xl shadow-lg bg-white hover:drop-shadow-xl">
                <img src="src/assets/thumbnail_idn.png" className="rounded-t-xl cursor-pointer" />
                <span className="absolute bg-red-400 text-[11px] font-medium items-center text-white pt-1 px-3 top-5 rounded-r-xl">PREMIUM</span>
                <div className="px-6 py-4">
                    <p className="text-[12px] mb-2 font-light text-[#A3A5A9] ">{props.lesson}</p>
                    <a className="font-bold leading-7 text-[22px] mb-5 cursor-pointer hover:text-[#F34848] text-black">{props.title}</a>
                    <div className="flex items-center gap-2 pb-8 mt-2">
                        <img src="src/assets/brand_idn.jpg" className="rounded-full w-max h-7" />
                        <p className="text-gray-700 text-xs font-medium w-fit cursor-pointer hover:text-[#F34848]">
                        ID-Networkers (IDN.ID)
                        </p>
                    </div>
                    <p className="text-end font-semibold text-lg">Rp{props.price}</p>
                </div>
            </div>
    );
}

export default CardKop;
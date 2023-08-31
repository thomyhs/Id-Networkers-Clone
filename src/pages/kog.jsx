import React from "react";
import CardKog from "../components/card-kog";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Kog() {
    return (
        <>
            <Navbar/>
            <KursusG/>
            <Footer/>
        </>
    )
}

const KursusG = () => {
    return(
        <div style={{fontFamily:"Roboto"}}>
            <p className="mt-[106px] ml-20 font-bold text-xl" >Kursus IT Gratis Terbaru</p>
            <div className="mt-10 mx-20 gap-5 grid grid-cols-4 min-w-fit">
                <CardKog  lesson = "5 Lessons" title= "Cisco Dasar" />
                <CardKog  lesson = "8 Lessons" title= "Jaringan Dasar" />
                <CardKog  lesson = "19 Lessons" title= "Linux Dasar" />
                <CardKog  lesson = "26 Lessons" title= "Mikrotik Dasar" />
                <CardKog  lesson = "20 Lessons" title= "Pemrograman Dart Dasar" />
                <CardKog  lesson = "6 Lessons" title= "Simulasi Jaringan dengan PNETlab" />
            </div>
        </div>
    )
}


export default Kog;
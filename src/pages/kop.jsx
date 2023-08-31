import React from "react";
import CardKog from "../components/card-kog";
import CardKop from "../components/card-kop";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Kop() {
    return (
        <>
            <Navbar/>
            <KursusP/>
            <KursusG/>
            <Footer/>
        </>
    )
}

const KursusG = () => {
    return(
        <div style={{fontFamily:"Roboto"}}>
            <p className="mt-[90px] ml-20 font-bold text-xl" >Kursus IT Gratis Terbaru</p>
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

const KursusP = () => {
    return(
        <div style={{fontFamily:"Roboto"}}>
            <p className="mt-[120px] ml-20 font-bold text-xl" >Kursus Online Premium</p>
            <div className="mt-10 mx-20 gap-5 grid grid-cols-4 min-w-fit">
                <CardKop  lesson = "14 Lessons" title= "Ansible Automation" price="987.000"/>
                <CardKop  lesson = "14 Lessons" title= "Basic VMWare Vsphere" price="987.000"/>
                <CardKop  lesson = "14 Lessons" title= "Mastering Docker" price="987.000"/>
                <CardKop  lesson = "18 Lessons" title= "Mikrotik VPN IKEv2" price="987.000"/>
                
            </div>
        </div>
    )
}


export default Kop;
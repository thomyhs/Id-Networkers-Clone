import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Admin() {
    return (
        <div>
            <Navbar/>
            <Profile/>
            <Footer/>
        </div>
    )
}

function Profile() {
    return (
        <>
            <div className="border-2 border-slate-950 w-auto mx-20">
                <div className="grid grid-rows-2 relative h-min">
                    <div>
                        <img src="src/assets/bg-profile.jpg" className="w-full h-fit" />
                    </div>
                    <img src="src/assets/brand_idn.jpg" className="absolute h-44 top-[45%] left-10 rounded-full border-4 border-white" />
                    <div className="ml-40">
                        <h1>ID-Networkers (IDN.ID)</h1>
                        <p>Joined Sep 2021 • Active 4 days ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;
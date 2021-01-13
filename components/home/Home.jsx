import React from 'react'
import './Home.module.css'
import Navbar from '../Navbar/Navbar'


function Home() {
    return (
        <main className="Home">
            <Navbar/>

            {/* VISI N MISI PERUSAHAAN */}
            <div className="visiMisi">
            <div className="imgContainer">
            <div className="darkEffect">
                <h1>OUR MISSION</h1>
            <h3>Being the best distributor on providing the best solution for customer by working closely with our suppliers and our customers. We strive to provide an excellent marketing service that is supported by an experienced sales team.</h3>
            </div>
            <img
                src="/kardus.svg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"                
            />
            
            </div>
            
            
            </div>
            <div className="businessPartners">
                <h1>OUR BUSINESS PARTNERS</h1>
            <img
                src="/alderon.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />
             <img
                src="/mortarUtama.svg"
                alt="Picture of the author"
                width={200}
                height={200}
            />
             <img
                src="/weber.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />
             <img
                src="/milanEcowood.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />

            </div>
        </main>
    )
}

export default Home

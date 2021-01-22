import React from 'react'
<<<<<<< HEAD
import './Home.module.css'
=======
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
>>>>>>> 1474101c592bdfc9bd304758a884ebccf935ffb5
import Navbar from '../Navbar/Navbar'


function Home() {
    return (
<<<<<<< HEAD
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
=======
        <main className={styles.Home}>
            <Navbar/>



            {/* VISI N MISI PERUSAHAAN */}
            <div className={styles.visiMisi}>
            <div className={styles.imgContainer}>
            <div className={styles.darkEffect}>
                <h1>OUR MISSION</h1>
            <h3>Being the best distributor on providing the best solution for customer by working closely with our suppliers and our customers. We strive to provide an excellent marketing service that is supported by an experienced sales team.</h3>
            </div>
            <Image
>>>>>>> 1474101c592bdfc9bd304758a884ebccf935ffb5
                src="/kardus.svg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"                
            />
            
            </div>
            
            
            </div>
<<<<<<< HEAD
            <div className="businessPartners">
                <h1>OUR BUSINESS PARTNERS</h1>
            <img
=======
            <div className={styles.businessPartners}>
                <h1>OUR BUSINESS PARTNERS</h1>
            <Image
>>>>>>> 1474101c592bdfc9bd304758a884ebccf935ffb5
                src="/alderon.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />
<<<<<<< HEAD
             <img
=======
             <Image
>>>>>>> 1474101c592bdfc9bd304758a884ebccf935ffb5
                src="/mortarUtama.svg"
                alt="Picture of the author"
                width={200}
                height={200}
            />
<<<<<<< HEAD
             <img
=======
             <Image
>>>>>>> 1474101c592bdfc9bd304758a884ebccf935ffb5
                src="/weber.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />
<<<<<<< HEAD
             <img
=======
             <Image
>>>>>>> 1474101c592bdfc9bd304758a884ebccf935ffb5
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

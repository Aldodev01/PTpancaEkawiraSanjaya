import React from 'react'
import styles from '../../../styles/Home.module.css'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'


function Home() {
    return (
        <main className={styles.Home}>
            <Navbar/>
            {/* HERO / HEADER PAGE PERUSAHAAN */}

            <div className={styles.headerImgContainer}>
            <div className={styles.heroText}>
            <h1>YOUR BUILD SOLUTION</h1>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem.</h3>
            </div>
            <Image
                src="/Assets/hero.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"                
            />
            </div>

            <div className={styles.aboutServiceArea}>
            <div className={styles.aboutCard}>
                    <div className={styles.cardLeft}>
                        <div className={styles.decorationCard1}>{/*Component kosong Jangan Dihapus */}</div>
                <Image
                    src="/Assets/rumah1.png"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                />
                    </div>
                    <div className={styles.cardRight}>
                        <h1>Lorem Ipsum Dolor</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
                    </div>
                    <div className={styles.cardBottom}>
                            <div className={styles.buletCardUtama}></div>
                            <div className={styles.buletCard}></div>
                            <div className={styles.buletCard}></div>
                            <div className={styles.buletCard}></div>
                            <div className={styles.buletCard}></div>
                            <div className={styles.blueDecoration}></div>


                    </div>
                </div>


                <div className={styles.aboutCard}>
                    <div className={styles.cardLeft2}>
                        <h1>Lorem Ipsum Dolor</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
                    </div>
                    <div className={styles.cardRight2}>
                        <div className={styles.decorationCard2}>{/*Component kosong Jangan Dihapus */}</div>
                <Image
                    src="/Assets/rumah2.png"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                />
                    </div>
                    <div className={styles.cardBottom}>
                            <div className={styles.blueDecoration2}></div>
                            <div className={styles.buletCardUtama}></div>
                            <div className={styles.buletCard}></div>
                            <div className={styles.buletCard}></div>
                            <div className={styles.buletCard}></div>
                            <div className={styles.buletCard}></div>


                    </div>
                </div>
                
            </div>


            {/* VISI N MISI PERUSAHAAN */}
            <div className={styles.visiMisi}>
            <div className={styles.imgContainer}>
            <div className={styles.darkEffect}>
                <h1>OUR MISSION</h1>
            <h3>Being the best distributor on providing the best solution for customer by working closely with our suppliers and our customers. We strive to provide an excellent marketing service that is supported by an experienced sales team.</h3>
            </div>
            <Image
                src="/kardus.svg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"                
            />
            
            </div>
            
            
            </div>
            <div className={styles.businessPartners}>
                <h1>OUR BUSINESS PARTNERS</h1>
            <Image
                src="/alderon.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />
             <Image
                src="/mortarUtama.svg"
                alt="Picture of the author"
                width={200}
                height={200}
            />
             <Image
                src="/weber.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />
             <Image
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

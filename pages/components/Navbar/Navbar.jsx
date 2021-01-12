import React from 'react'
import Image from 'next/image'
import style from "./navbar.module.css"

function Navbar() {
    return (

        <nav className={style.navbar}>
            <div className={style.navLeft}>
                <Image
                    src="/Assets/Brand.png"
                    alt="Picture of the author"
                    width="65"
                    height="65"
                    />
                    <div className={style.textbrand}>
                        <h3 className={style.textbrand1}>PANCA EKAWIRA</h3>
                        <h3 className={style.textbrand2}>SANJAYA</h3>
                    </div>   
            </div>

            <div className={style.navRight}>
                <h3>COMPANY PROFILE</h3>
                <h3>PRODUCT</h3>
                <h3>PROJECT</h3>
                <h3>CONTACT</h3>
                <h3>E-COMM PLAN</h3>

                <div className={style.navSearch}>
                    <form action="">
                        <input type="text" className={style.navInput}/>
                        <span class="material-icons">
                            search
                        </span>
                    </form>
                </div>

            </div>
        </nav>

    )
}
export default Navbar

import React from 'react'
import Image from 'next/image'
import style from "./navbar.module.css"
import Link from "next/link"

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
                <h3><Link href="/company">COMPANY PROFILE</Link></h3>
                <h3><Link href="/product">PRODUCT</Link></h3>
                <h3> <Link href="/project">PROJECT </Link></h3>
                <h3><Link href="/contact"> CONTACT </Link></h3>
                <h3><Link href="/e-comm">E-COMM PLAN</Link></h3>

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

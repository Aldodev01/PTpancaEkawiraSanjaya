import React from 'react'
import Image from 'next/image'
import "./navbar.module.css"

function Navbar() {
    return (

        <nav className="navbar">
            <div className="navLeft">
                <Image
                    src="/Assets/Brand.png"
                    alt="Picture of the author"
                    width="65"
                    height="65"
                    />
                    <div className="textbrand">
                        <h3 className="textbrand1">PANCA EKAWIRA</h3>
                        <h3 className="textbrand2">SANJAYA</h3>
                    </div>   
            </div>

            <div className="navRight">
                <h3>COMPANY PROFILE</h3>
                <h3>PRODUCT</h3>
                <h3>PROJECT</h3>
                <h3>CONTACT</h3>
                <h3>E-COMM PLAN</h3>

                    <form className="navSearch">
                        <input type="text" className="navInput" placeholder="search..." />
                        <div className="icnContainer">
                        <span className="material-icons">search</span>
                        </div>
                        
                    </form>

            </div>
        </nav>

    )
}
export default Navbar

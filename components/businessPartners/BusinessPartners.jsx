import React from 'react'
import Image from 'next/image'
import './BusinessPartners.css'

function BusinessPartners() {
    return (
        <div className="businessPartners">
           
                <h1 className="businessPartnersText">OUR BUSINESS PARTNERS</h1>
            <div className="imgContainerBusiness">
                <div className="imgContainerBottom">
                    <div className="image1">
                        <Image
                            src="/assets/logoPerusahaan/logoWeber.png"
                            alt="Picture of the author"
                            width="400px"
                            height="400px"
                        />
                    </div>

                    <div className="image2">
                        <Image
                            src="/assets/logoPerusahaan/logoMilan.png"
                            alt="Picture of the author"
                            width="400px"
                            height="400px"

                        />
                    </div>

                    <div className="image3">
                        <Image
                            src="/assets/logoPerusahaan/logoShera.png"
                            alt="Picture of the author"
                            width="400px"
                            height="400px"

                        />
                    </div>
                
                    <div className="image4">
                        <Image
                            src="/assets/logoPerusahaan/logoPaldeco.png"
                            alt="Picture of the author"
                            width="400px"
                            height="400px"

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessPartners

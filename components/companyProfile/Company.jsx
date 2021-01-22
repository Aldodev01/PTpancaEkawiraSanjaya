import React from 'react'
import './Company.module.css'

function Company() {
    return (<>
    <div className="company">

        
        <div className="imgCompany">
            <img
                src="/imgCompany.svg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"        
                />
                <div className="judulCompany">
                    <h1>COMPANY PROFILE</h1>
                </div>

        </div>

        <div className="containerCompany">
            <img
                src="/separatorBlack.svg"
                alt="Picture of the author"
                width={300}
                height={300}
            />

            <div className="isiCompany">
                <h2>About Us</h2>

                <p>Established in Jakarta, Indonesia in 2018, PT. Panca Ekawira Sanjaya was founded by professionals with years of experience in supplying and distributing building materials and providing construction services. The basic function of the company is as a source in distributing building materials and construction services throughout Indonesia.
                </p>

                <p>
                The essence of our business today is to assist clients in the supply of goods and providing the best solution on the needs of the products to  be used and ensure the products we supply are the best in their field.
                Our experience team is committed to working responsibly to meet the  \needs of clients with reliable experience gained from our principles.
                </p>

                <div className="imgIsiCompany">
                    <img
                    src="/separatorBlack.svg"
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    />
                </div>

                    <h1>OUR BUSINESS PARTNERS</h1>
                <div className="businessCompany">


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
            </div>
        </div>
        

    </div>

        </>
    )
}

export default Company

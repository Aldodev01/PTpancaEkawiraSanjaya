import React from 'react'
import Head from 'next/head'
import BusinessPartners from '../../components/businessPartners/BusinessPartners'
import CompanyContainer from '../../components/CompanyProfile/companyContainer.jsx/CompanyContainer'
import CompanyHeader from '../../components/CompanyProfile/companyHeader/CompanyHeader'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Bussiness from '../../components/businessPartners/BusinessPartners'


function CompanyProfile() {
    return (
        <div className="companyProfile">

        <Head>
            <title>PancaEkawiraSanjaya</title>
            <meta name="description" content="PT Panca Ekawira Sanjaya"/>
            <link rel="icon" href="/iconBrand.svg" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
            <meta property="og:image" content="/Assets/hero.png" />
        </Head>

           <Navbar/>

            <div className="companyHeader">
                <CompanyHeader/>
            </div>

            <div className="companyContainer">
                <CompanyContainer/>
            </div>

            <div className="businessPartners">
                <Bussiness/>
            </div>

           <Footer/>
        </div>
           

    )
}

export default CompanyProfile

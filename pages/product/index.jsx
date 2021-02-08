import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/Product/productCard/ProductCard'
import ProductHeader from '../../components/Product/productHeader/ProductHeader'
import Head from 'next/head'


function index() {
    return (<>

        <div className="product">

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

            <div className="productHeader">
                <ProductHeader/>    
            </div>

            <div className="productContainer">
                <ProductCard/>    
            </div>

            <Footer/>        
        </div>
    </>
    )
}

export default index

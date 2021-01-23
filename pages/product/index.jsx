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
            <link rel="icon" href="/iconBrand.svg" />
            <meta name="Product" content=""/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
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
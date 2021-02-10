import React from 'react'
import ProductCard from '../../components/Product/productCard/ProductCard'
import ProductHeader from '../../components/Product/productHeader/ProductHeader'
import Head from 'next/head'
import Layout from '../../components/Layout'


function index() {
    return (<>

        <div className="product">

        <Head>
            <title>PancaEkawiraSanjaya</title>
            <link rel="icon" href="/iconBrand.svg" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous"></link>
            <meta property="og:image" content="/Assets/hero.png" />
            <meta name="description" content="PT Panca Ekawira Sanjaya"/>

        </Head>

           <Layout>

            <div className="productHeader">
                <ProductHeader/>    
            </div>

            <div className="productContainer">
                <ProductCard/>    
            </div>

            </Layout>       
        </div>
    </>
    )
}

export default index

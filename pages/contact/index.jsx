import React from 'react'
import Head from 'next/head';

import ContactForm from '../../components/ContactForm/ContactForm'
import ContactHeader from '../../components/ContactHeader/ContactHeader'
import Layout from '../../components/Layout'
import './style.css'


const index = () => {
  return (
    <>
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
      <ContactHeader />
      <main className="contact">

        <img
          src="/separatorBlack.svg"
          alt="Picture of the author"   
          width="100"   
          style={{marginTop: '50px'}}      
        />

        <ContactForm />

      </main>
      </Layout>
    </>
  )
}

export default index

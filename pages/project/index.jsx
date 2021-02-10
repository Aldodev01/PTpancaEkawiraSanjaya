import React from 'react'
import Head from 'next/head';

import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader'
import './style.css'

const index = () =>{
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

      <ProjectHeader/>
      
      <section className="project">


        <div className="containerOurProject">

          <h1 className="titleHeader">Our Project</h1>

          <ProjectCard 
            title="Cluster Caelus, Greenwich – BSD" 
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit." 
            img="/cardProject1.png"
          />
          <ProjectCard
            title="Cluster Water Terrace, Grand Wisata" 
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit." 
            img="/cardProject2.png"
          />
          <ProjectCard
            title="The Branz Simatupang" 
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit." 
            img="/cardProject3.png"
          />
          <ProjectCard
            title="Pabrik Difi Medika" 
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit." 
            img="/cardProject4.png"
          />
          

        </div>


      </section>

      
      </Layout>
    </>
  )
}

export default index;
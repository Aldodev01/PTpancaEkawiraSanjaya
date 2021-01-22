import Head from 'next/head'
import './Home.module.css'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import HomeHeader from '../components/Home/HomeHeader/HomeHeader'
import HomeCard1 from '../components/Home/HomeCard1/HomeCard1'
import HomeServices from '../components/Home/HomeServices/HomeServices'
import HomeCard2 from '../components/Home/.HomeCard2/HomeCard2'

export default function Home() {
  return (<>


    <div className="container">
      <Head>
        <title>PancaEkawiraSanjaya</title>
        <link rel="icon" href="/iconBrand.svg" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>

      </Head>

      <main className="Home">
        <Navbar/>
        {/* HERO / HEADER PAGE PERUSAHAAN */}

        <HomeHeader />

        <HomeCard1/>

        <div className="aboutServiceArea">
          <HomeServices/>
        {/* <HomeCard1 />
        <HomeServices /> */}
        {/* <HomeCard2 /> */}    
        </div>
        {/* VISI N MISI PERUSAHAAN */}

        <div className="businessPartners">
          <HomeCard2/>
        </div>
    </main>

        <Footer/>
    </div>
  <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Play;
  }

  * {
    box-sizing: border-box;
  }
`}</style>
    </>
  )
  
}

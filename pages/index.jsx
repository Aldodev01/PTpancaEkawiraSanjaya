import Head from 'next/head'
import './Home.module.css'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import HomeCard1 from '../components/HomeCard1/HomeCard1'
import HomeServices from '../components/HomeServices/HomeServices'
import HomeCard2 from '../components/.HomeCard2/HomeCard2'


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

        <div className="aboutServiceArea">
        
        <HomeCard1 />
        <HomeServices />
        <HomeCard2 />

            
        </div>


        {/* VISI N MISI PERUSAHAAN */}
        <div className="visiMisi">
        <div className="imgContainer">
        <div className="darkEffect">
            <h1>OUR MISSION</h1>
        <h3>Being the best distributor on providing the best solution for customer by working closely with our suppliers and our customers. We strive to provide an excellent marketing service that is supported by an experienced sales team.</h3>
        </div>
        <Image
            src="/kardus.svg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"                
        />
        
        </div>
        
        
        </div>

        <div className="businessPartners">
            <h1>OUR BUSINESS PARTNERS</h1>
        <div className="imgContainerBusiness">
        <div className="imgContainerBottom">
        <Image
            src="/alderon.svg"
            alt="Picture of the author"
            width="300px"
            height="300px"
        />
         <Image
            src="/mortarUtama.svg"
            alt="Picture of the author"
            width="150px"
            height="150px"

        />
         <Image
            src="/weber.svg"
            alt="Picture of the author"
            width="300px"
            height="300px"

        />
         <Image
            className="milan"
            src="/milanEcowood.svg"
            alt="Picture of the author"
            width="3500px"
            height="300px"
            className="gambarBawah"

        />

        </div>
        </div>
        <div className="forMarginBottomHome">
            {/*Jangan dihapus*/}
        </div>

        </div>
    </main>

        <Footer/>
    </div>
  <style jsx global>{`
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

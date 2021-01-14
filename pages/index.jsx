import Head from 'next/head'
import './Home.module.css'
import Footer from './components/footer/Footer'
import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'


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

        <div className="headerImgContainer">
        <div className="heroText">
        <h1>YOUR BUILD SOLUTION</h1>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem.</h3>
        </div>
        <Image
            src="/Assets/hero.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"                
        />
        </div>

        <div className="aboutServiceArea">
        <div className="aboutCard">
                <div className="cardLeft">
                    <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
            <Image
                src="/Assets/rumah1.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
                </div>
                <div className="cardRight">
                    <h1>Lorem Ipsum Dolor</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
                </div>
                <div className="cardBottom">
                        <div className="buletCardUtama"></div>
                        <div className="buletCard"></div>
                        <div className="buletCard"></div>
                        <div className="buletCard"></div>
                        <div className="buletCard"></div>
                        <div className="blueDecoration"></div>


                </div>
            </div>

            <div className="ourServices">
                <h2>OUR SERVICE</h2>
                <div className="decorationServices"></div>
                <div className="serviceContent">
                    <i className="fas fa-building"></i>
                   <div className="serviceText">
                   <h2>Building</h2>
                   <p>Lorem  ipsum, dolor sit amet consectetur adipisicing elit.  </p>
                   </div>
                </div>
                <div className="serviceContent">
                    <i className="fas fa-shopping-cart"></i>
                   <div className="serviceText">
                   <h2>SUPPLYING</h2>
                   <p>Lorem  ipsum, dolor sit amet consectetur adipisicing elit.  </p>
                   </div>
                </div>
                <div className="serviceContent">
                   <i className="fas fa-tools"></i>
                   <div className="serviceText">
                   <h2>DISTRIBUTING</h2>
                   <p>Lorem  ipsum, dolor sit amet consectetur adipisicing elit.  </p>
                   </div>
                </div>
                <div className="serviceContent">
                    <i className="fas fa-tools"></i>
                   <div className="serviceText">
                   <h2>CONSTRUCTION SERVICE</h2>
                   <p>Lorem  ipsum, dolor sit amet consectetur adipisicing elit.  </p>
                   </div>
                </div>
                <div className="decorationBolaService"></div>
                <div className="decorationBolaService2"></div>
                <div className="decorationBolaService3"></div>
            </div>


            <div className="aboutCard2">
                <div className="cardLeft2">
                    <h1>Lorem Ipsum Dolor</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
                </div>
                <div className="cardRight2">
                    <div className="decorationCard2">{/*Component kosong Jangan Dihapus */}</div>
            <Image
                src="/Assets/rumah2.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
                </div>
                <div className="cardBottom">
                        <div className="blueDecoration2"></div>
                        <div className="buletCardUtama"></div>
                        <div className="buletCard"></div>
                        <div className="buletCard"></div>
                        <div className="buletCard"></div>
                        <div className="buletCard"></div>


                </div>
            </div>
            
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

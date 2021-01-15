import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Project.module.css'

const index = () =>{
  return (
    <>
      <Navbar />

      <main className="project">
        <div className="imgProject">
          <img
            src="/coba.png"
            alt="Picture of the author"
          />
          <div className="judulProject">
              <h1>PROJECT</h1>
          </div>

        </div>

        <div className="containerOurProject">

          <h1 className="titleHeader">Our Project</h1>

          <div className="containerCard">
            <div className="cardContent">
              <div className="cardLeft">
                <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
                  <img
                      src="/cardProject1.png"
                      alt="Picture of the author"
                  />
              </div>
              <div className="cardRight">
                  <h1>Cluster Caelus, Greenwich – BSD</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
              </div>
            </div>

            <div className="cardContent">
              <div className="cardLeft">
                <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
                  <img
                      src="/cardProject2.png"
                      alt="Picture of the author"
                  />
              </div>
              <div className="cardRight">
                  <h1>Cluster Water Terrace, Grand Wisata </h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
              </div>
            </div>

            <div className="cardContent">
              <div className="cardLeft">
                <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
                  <img
                      src="/cardProject3.png"
                      alt="Picture of the author"
                  />
              </div>
              <div className="cardRight">
                  <h1>The Branz Simatupang </h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
              </div>
            </div>

            <div className="cardContent">
              <div className="cardLeft">
                <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
                  <img
                      src="/cardProject4.png"
                      alt="Picture of the author"
                  />
              </div>
              <div className="cardRight">
                  <h1>Pabrik Difi Medika </h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem. Ab dolorem sapiente distinctio quod, a maiores nobis iure soluta accusamus suscipit.</p>
              </div>
            </div>
          
            
          </div>

          

        </div>


      </main>

      
      <Footer />
    </>
  )
}

export default index;
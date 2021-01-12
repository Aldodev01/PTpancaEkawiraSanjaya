import Head from 'next/head'
import styles from '../styles/App.module.css'
import Footer from './components/footer/Footer'
import HomePage from './components/home/Home'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (<>
    <Navbar />

    <div className={styles.container}>
      <Head>
        <title>Aldo Apps</title>
        <link rel="icon" href="/iconbrand.svg" />
    

      </Head>


        

        <HomePage/>
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

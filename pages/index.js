import Head from 'next/head'
import styles from '../styles/App.module.css'
import Footer from './components/footer/Footer'
import HomePage from './components/home/Home'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aldo Apps</title>
        <link rel="icon" href="/iconbrand.svg" />
      </Head>

      <main className={styles.main}>
        

        <HomePage/>
         
        
      </main>

        <Footer/>
    </div>
  )
}

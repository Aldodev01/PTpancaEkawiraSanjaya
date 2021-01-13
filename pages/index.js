import Head from 'next/head'
import styles from '../styles/App.module.css'
import Company from '../components/companyProfile/Company'
import Footer from '../components/footer/Footer'
import HomePage from '../components/home/Home'

export default function Home() {
  return (<>


    <div className={styles.container}>
      <Head>
        <title>PancaEkawiraSanjaya</title>
        <link rel="icon" href="/iconBrand.svg" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
        

      </Head>


        

        <HomePage/>

        <Company/>

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

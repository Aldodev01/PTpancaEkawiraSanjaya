import React from 'react'
import styles from '../../styles/Footer.module.css'
import Image from 'next/image'

function Footer() {
    return (
    <>
        <div className={styles.footer}>
                <div className={styles.footerKiri}>
                    <h3 className={styles.PTpancaFooterText}>PT. PANCA EKAWIRA SANJAYA</h3>
                    <h4 className={styles.textFooter}>The CEO Building 12th floor  Jl. TB. Simatupang 
                        No. 18 C Jakarta Selatan, 12430 
                    </h4>

                    <div className="kontakPT">
                        
                    </div>
                </div>
                <div className={styles.footerKanan}>
                    <h2></h2>
                </div>
           
            
        </div>
        <div className={styles.footerBawah}>
               
            <h3 className={styles.footerTitle}>© 2021 Panca Ekawira Sanjaya. All rights reserved.</h3>
        </div>  
    </>
    )
}

export default Footer

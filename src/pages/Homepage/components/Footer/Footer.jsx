import React from "react"
// Images
import lightLogo from "../../../../shared/img/lightLogo.svg"
import facebookLogo from "./img/facebookLogo.svg"
import instagramLogo from "./img/instagramLogo.svg"
import twitterLogo from "./img/twitterLogo.svg"
import youtubeLogo from "./img/youtubeLogo.svg"
// Styles
import styles from "./Footer.module.scss"

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.wrap}>
            <img src={lightLogo} alt="logo" />
            <div className={styles.links}>
               <a href="https://www.facebook.com/">
                  <img src={facebookLogo} alt="facebook" />
               </a>
               <a href="https://twitter.com/">
                  <img src={twitterLogo} alt="twitter" />
               </a>
               <a href="https://www.instagram.com/">
                  <img src={instagramLogo} alt="instagram" />
               </a>
               <a href="https://www.youtube.com/">
                  <img src={youtubeLogo} alt="youtube" />
               </a>
            </div>
         </div>
      </footer>
   )
}

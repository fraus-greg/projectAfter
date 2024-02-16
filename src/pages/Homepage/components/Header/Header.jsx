import React from "react"
// Images
import darkLogo from "../../../../shared/img/darkLogo.svg"
// Styles
import styles from "./Header.module.scss"
import font from "./../../../../shared/styles/font.module.scss"

export default function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.wrap}>
            <div className={styles.imgWrap}>
               <img src={darkLogo} alt="logo" />
            </div>
            <div className={styles.links}>
               <a className={font.black20} href="">
                  Продукция
               </a>
               <a className={font.black20} href="">
                  Материалы
               </a>
               <a className={font.black20} href="">
                  О нас
               </a>
               <a className={font.black20} href="">
                  Контакты
               </a>
            </div>
         </div>
      </header>
   )
}

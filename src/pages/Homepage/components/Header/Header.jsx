import React from "react"
// Images
import logo from "../../../../shared/img/logo.svg"
// Styles
import styles from "./Header.module.scss"
import font from "./../../../../shared/styles/font.module.scss"

export default function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.wrap}>
            <img src={logo} alt="logo" />
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

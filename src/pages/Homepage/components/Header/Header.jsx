import React from "react"
import logo from "../../../../assets/img/logo.svg"
import styles from "./Header.styles.scss"
import font from "./../../../../assets/styles/font.module.scss"

export default function Header() {
   return (
      <header>
         <div className={styles.wrap}>
            <img src={logo} alt="logo" />
            <div className={styles.links}>
               <div className={font.gray20} href="">
                  Продукция
               </div>
               <div className={font.gray20} href="">
                  Материалы
               </div>
               <div className={font.gray20} href="">
                  О нас
               </div>
               <div className={font.gray20} href="">
                  Контакты
               </div>
            </div>
         </div>
      </header>
   )
}

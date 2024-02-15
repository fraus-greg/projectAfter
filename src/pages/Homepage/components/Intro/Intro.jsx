import React from "react"
import classNames from "classnames"
// Images
import paperTube from "./img/paperTube.png"
// Styles
import styles from "./Intro.module.scss"
import font from "./../../../../shared/styles/font.module.scss"

export default function Header() {
   return (
      <section className={styles.section}>
         <div className={styles.content}>
            <div className={font.black60}>Простые вещи. Из бумаги</div>
            <div className={font.gray18}>
               Бума́га (предположительно от итал. bombagia, первоисточником же
               считается иранский) — волокнистый материал с минеральными
               добавками.
            </div>
            <button className={classNames(font.purple20, styles.button)}>
               Каталог
            </button>
         </div>
         <img src={paperTube} alt="paperTube" />
      </section>
   )
}

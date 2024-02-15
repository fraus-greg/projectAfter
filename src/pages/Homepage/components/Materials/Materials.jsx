import React from "react"
// Components
import Card from "./components/Card/Card.jsx"
// Images
import buissnesCard4 from "./img/buissnesCard4.png"
// Styles
import styles from "./Materials.module.scss"
import font from "../../../../shared/styles/font.module.scss"

export default function Materials() {
   return (
      <section className={styles.section}>
         <div className={styles.wrap}>
            <div className={styles.cards}>
               <Card
                  img="buissnesCard1"
                  text="Результат вашего обучения"
                  number="1"
               />
               <Card
                  img="buissnesCard2"
                  text="Результат вашего обучения"
                  number="2"
               />
               <Card
                  img="buissnesCard3"
                  text="Результат вашего обучения"
                  number="3"
               />
            </div>
            <div className={styles.overview}>
               <img src={buissnesCard4} alt="buissnesCard4" />
               <div className={styles.text}>
                  <div className={font.semiGray40}>Максимальная белизна</div>
                  <div className={font.gray18}>
                     Для повышения белизны, гладкости и мягкости в состав
                     бумажной массы вводят белые минеральные вещества: мел,
                     тальк, каолин и др. Эта операция называется наполнением.
                     Отлив бумажного листа осуществляют на бумагоделательной
                     машине, важнейшей частью которой является непрерывно
                     движущаяся (как транспортер) металлическая или капроновая
                     сетка.
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

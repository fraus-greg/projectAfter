import React from "react"
// Components
import Card from "./components/Card/Card.jsx"
// Images
import buissnesCard1 from "./img/buissnesCard1.png"
import buissnesCard2 from "./img/buissnesCard2.png"
import buissnesCard3 from "./img/buissnesCard3.png"
import buissnesCard4 from "./img/buissnesCard4.png"
// Styles
import styles from "./ProductionOverview.module.scss"
import font from "../../../../shared/styles/font.module.scss"

export default function ProductionOverview() {
   return (
      <section>
         <div className={styles.cards}>
            <div className={styles.card}>
               <img src="bussinesCard1" alt="bussinesCard1" />
            </div>
            <div className={styles.card}>
               <img src="bussinesCard2" alt="bussinesCard2" />
            </div>
            <div className={styles.card}>
               <img src="bussinesCard3" alt="bussinesCard3" />
            </div>
         </div>
      </section>
   )
}

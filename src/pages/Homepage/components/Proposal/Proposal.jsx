import React from "react"
// Images
import proposalImg from "./img/proposalImg.png"
// Styles
import styles from "./Proposal.module.scss"
import font from "../../../../shared/styles/font.module.scss"

export default function Proposal() {
   return (
      <section className={styles.section}>
         <div className={styles.content}>
            <div className={font.semiGray40}>Simple скетчбук</div>
            <div className={font.gray18High}>
               80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет и
               для графики и для акварели. Для самых смелых творческих замыслов!
            </div>
            <img src={proposalImg} alt="скетчбук" />
         </div>
      </section>
   )
}

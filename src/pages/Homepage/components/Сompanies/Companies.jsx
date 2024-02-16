import React from "react"
// Components
import Company from "./components/Company/Company.jsx"
// Styles
import styles from "./Сompanies.module.scss"

export default function Companies() {
   return (
      <section className={styles.section}>
         <div className={styles.wrap}>
            <Company img="company1" link="https://www.hahnemuehle.com/" />
            <Company img="company2" link="https://en.canson.com/" />
            <Company img="company3" link="https://www.royaltalens.com/en/" />
            <Company img="company4" link="https://fabriano.com/en/" />
         </div>
      </section>
   )
}

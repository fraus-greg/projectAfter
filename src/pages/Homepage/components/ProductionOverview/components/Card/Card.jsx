import React from "react"
// Styles
import styles from "./Card.module.scss"
import font from "../../../../../../shared/styles/font.module.scss"

export default function Card(props) {
   return (
      <article>
         <img src={props.img} alt="props.img" />
         <div className={styles.content}>
            <div className={font.semiGray18}>V.{props.number}</div>
            <div className={font.gray18}>{props.text}</div>
         </div>
      </article>
   )
}

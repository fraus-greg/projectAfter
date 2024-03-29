import React from "react"
// Styles
import styles from "./Card.module.scss"
import font from "../../../../../../shared/styles/font.module.scss"

export default function Card(props) {
   const img = require(`./img/${props.img}.png`)

   return (
      <article className={styles.article}>
         <img src={img} alt={props.img} />
         <div>
            <div className={font.semiGray18}>V.{props.number}</div>
            <div className={font.gray18}>{props.text}</div>
         </div>
      </article>
   )
}

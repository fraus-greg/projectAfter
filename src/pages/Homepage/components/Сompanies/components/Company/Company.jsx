import React from "react"
// Styles
import styles from "./Company.module.scss"

export default function Company(props) {
   const imgSrc = require(`./img/${props.img}.svg`)

   return (
      <a href={props.link}>
         <article className={styles.article}>
            <img src={imgSrc} alt={props.img} />
         </article>
      </a>
   )
}

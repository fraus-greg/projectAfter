import React from "react"
//Styles
import styles from "./Product.module.scss"
import font from "../../../../../../shared/styles/font.module.scss"

export default function Product(props) {
   const imgSrc = require(`./img/${props.img}.png`)

   return (
      <article className={styles.article}>
         <div className={styles.imgWrap}>
            <img
               className={
                  props.img === "ProductImg1"
                     ? styles.img1
                     : props.img === "ProductImg2"
                     ? styles.img2
                     : props.img === "ProductImg3"
                     ? styles.img3
                     : props.img === "ProductImg4"
                     ? styles.img4
                     : ""
               }
               src={imgSrc}
               alt={props.img}
            />
         </div>
         <div className={styles.content}>
            <div className={font.semiGray30}>{props.title}</div>
            <div className={font.lightGray14}>
               Тираж: от {props.circulation}
               {parseInt(props.circulation) === 1 ? " штуки" : " штук"}
            </div>
            <div className={font.gray18High}>{props.description}</div>
         </div>
      </article>
   )
}

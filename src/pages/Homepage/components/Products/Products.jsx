import React from "react"
// Components
import Product from "./components/Product/Product.jsx"
// Styles
import styles from "./Products.module.scss"

export default function Products() {
   return (
      <section className={styles.section}>
         <Product
            title="Упаковка"
            img="ProductImg1"
            circulation="50"
            description="Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ."
         />
         <Product
            title="Пакеты"
            img="ProductImg2"
            circulation="200"
            description="С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн."
         />
         <Product
            title="Кейсы"
            img="ProductImg3"
            circulation="30"
            description="Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага."
         />
         <Product
            title="Другие изделия"
            img="ProductImg4"
            circulation="100"
            description="Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки."
         />
      </section>
   )
}

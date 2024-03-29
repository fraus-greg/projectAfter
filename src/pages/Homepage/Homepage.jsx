import React from "react"
// Components
import Header from "./components/Header/Header.jsx"
import Intro from "./components/Intro/Intro.jsx"
import Materials from "./components/Materials/Materials.jsx"
import Products from "./components/Products/Products.jsx"
import Companies from "./components/Сompanies/Companies.jsx"
import Proposal from "./components/Proposal/Proposal.jsx"
import Footer from "./components/Footer/Footer.jsx"
// Styles
import styles from "./Homepage.styles.scss"

export default function Homepage() {
   return (
      <>
         <Header />
         <main className={styles.main}>
            <Intro />
            <Materials />
            <Products />
            <Companies />
            <Proposal />
         </main>
         <Footer />
      </>
   )
}

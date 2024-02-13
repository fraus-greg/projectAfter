import React from "react"
// Components
import Header from "./components/Header/Header.jsx"
import Intro from "./components/Intro/Intro.jsx"
// Styles
import styles from "./Homepage.styles.scss"

export default function Homepage() {
   return (
      <>
         <Header />
         <main>
            <Intro />
         </main>
      </>
   )
}

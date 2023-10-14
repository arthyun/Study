import React from "react";
import styles from "./page.module.css";

// components
import Header from "./components/Header";

export default function Home() {
   return (
      <>
         <Header />
         <main className={styles.main}>
            <h3>HelloWorld</h3>
         </main>
      </>
   );
}

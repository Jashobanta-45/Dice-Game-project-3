import React from 'react'
import styles from './entrypage.module.css'

const Entrypage = ({toggle}) => {
 
  return (
    <main className={styles.entry}>
      <div className={styles.imageBox}>
        <img src="/dices 1.png" alt="Dice" />
      </div>

      <div className={styles.contentBox}>
        <h1>DICE GAME</h1>
        <button 
        onClick={toggle}>Play Now</button>
      </div>
    </main>
  )
}

export default Entrypage;

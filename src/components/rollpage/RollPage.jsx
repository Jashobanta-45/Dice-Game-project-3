import React, { useState } from "react";
import styles from "./rollpage.module.css";
import Rullpage from "../rulepage/Rullpage";
const RollPage = ({ currentDice, setcurrentDice,roleDice , resets}) => {
const [ishide, setishide] = useState(false)
return (
    <section className={styles.diceWrapper}>
      <div className={styles.diceBox}>
        <img
          src={`/image/dice_${currentDice}.png`}
          alt="Dice"
          onClick={roleDice}
        />
        <h1>Click on Dice to roll</h1>
      </div>
      <div className={styles.btnGroup}>
        <button onClick={ resets}>Reset Score</button>
       <button onClick={() => setishide((prev) => !prev)}>
            {ishide ? "Hide Rules" : "Show Rules"}
          </button>
      </div>

          {ishide && (
        <section className={styles.rulesSection}>
          <h1>How to play dice game</h1>

          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            After click on dice, if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>If you get wrong guess then 2 point will be deducted</p>
        </section>
      )}
    
    </section>
  );
};

export default RollPage;

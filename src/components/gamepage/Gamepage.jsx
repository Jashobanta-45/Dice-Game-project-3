import React, { useState } from "react";
import styles from "./gamepage.module.css";
import RollPage from "../rollpage/RollPage";

const GAmepage = () => {
  const [currentDice, setcurrentDice] = useState(1);
  const [selectNum, setselectNum] = useState(null);
  const [reset, setreset] = useState(0);
  const [score, setscore] = useState(0);
  const diceNumbers = [1, 2, 3, 4, 5, 6];

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randoNum = generateNumber(1, 7);
    setcurrentDice((prev) => randoNum);
    if (!selectNum) return;
    if (selectNum === randoNum) {
      setscore((prev) => prev + selectNum);
    } else {
      setscore((prev) => prev - 2);
    }
    setselectNum(undefined)
  };
  const resets = () => {
    setscore(0);
  };
  return (
    <main className={styles.gameLayout}>
      <div className={styles.scoreBox}>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>

      <div className={styles.diceSection}>
        {diceNumbers.map((num, i) => (
          <div
            key={i}
            className={styles.box}
            onClick={() => setselectNum(num)}
            style={{
              backgroundColor: selectNum === num ? "black" : "white",
              color: selectNum === num ? "white" : "black",
            }}
          >
            {num}
          </div>
        ))}
      </div>
      <RollPage
        currentDice={currentDice}
        setcurrentDice={setcurrentDice}
        roleDice={roleDice}
        resets={resets}
      />
    </main>
  );
};

export default GAmepage;

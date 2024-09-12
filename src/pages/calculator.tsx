import { useState } from 'react';
import styles from "@/styles/Calculator.module.css";

const Calculator = () => {

  const [num1, setNum1] = useState<number | string>('');
  const [num2, setNum2] = useState<number | string>('');
  const [total, setTotal] = useState<number | null>(null);

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setTotal(sum);
  };

  return (
    <div className={styles.centerDiv}>
      <div className={styles.calculatorContainer}>
        <div className={styles.mainTitle}>
          <h1>Adding Two Numbers</h1>
        </div>
          

        <div className={styles.inputWrapper}>
          <input
          className={styles.numberInput}
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
          <input
            className={styles.numberInput}
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>

        <div className={styles.calculatorBtnWrapper}>
          <button onClick={handleAddition} className={styles.calculatorButton}>
            Add Two Numbers
          </button>
          <h3>Total: {total}</h3>
        </div>

      </div>
    </div>
  );
};

export default Calculator;

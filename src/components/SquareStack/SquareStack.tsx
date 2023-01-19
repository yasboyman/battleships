import React from "react";
import styles from "./squareStack.module.css";

interface Props {
  number: number;
}

const SquareStack: React.FC<Props> = ({ number }) => {
  const boxes = [];
  for (let i = 0; i < number; i++) {
    boxes.push(
      <div key={i} className={styles.Box}
      />
    );
  }
  return <div>{boxes}</div>;
};

export default SquareStack;

import React from "react";
import styles from "./squareStack.module.css";

interface Props {
  count: number;
}

const SquareStack: React.FC<Props> = ({ count }) => {
  let boxes = [];
  for (let i = 0; i < count; i++) {
    boxes.push(<div key={i} className={styles.Box} />);
  }
  return <div>{boxes}</div>;
};

export default SquareStack;

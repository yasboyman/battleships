import GridBox from "../GridBox/gridBox";

export const createGrid = () => {
  const grid = [];
  for (let row = 0; row < 1; row++) {
    grid.push([]);
    for (let col = 1; col <= 90; col++) {
      grid[row].push(<GridBox key={`${col}`} label={col} />);
    }
  }
  return grid;
};

export const checkNumbers = (previousNumber: number, currentNumber: number) => {
  const plusOne = previousNumber + 1;
  const minusOne = previousNumber - 1;
  const plusTen = previousNumber + 10;
  const minusTen = previousNumber - 10;

  return [plusOne, minusOne, plusTen, minusTen].includes(currentNumber);
};

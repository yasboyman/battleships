import GridBox from "../gridBox/gridBox";

export const createGrid = () => {
  const grid = [];
  for (let row = 0; row < 1; row++) {
    grid.push([]);
    for (let col = 1; col <= 90; col++) {
      grid[row].push(<GridBox key={`${col}`} color="whitesmoke" label={col} />);
    }
  }
  return grid;
};
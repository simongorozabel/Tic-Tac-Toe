import { WINNER_COMBOS } from "../constants";
export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // if there aren't winners
  return null;
};

export const checkEndGame = (newBoard) => {
  // check if there aren't empty squares on board
  return newBoard.every((square) => square !== null);
};

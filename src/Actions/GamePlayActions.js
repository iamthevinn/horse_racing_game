export const START_GAME = "START_GAME";
export const SET_POSITION = "SET_POSITION";
export const SET_DICE_TOTAL = "SET_DICE_TOTAL";

export function setHorsePosition(postPosition, squarePosition) {
  return (dispatch, getState, api) => {
    const horsePosition = { postPosition, squarePosition };
    dispatch({ type: SET_POSITION, data: horsePosition });
  }
}

export function moveHorse(postPosition, numberOfSquares) {
  return (dispatch, getState, api) => {
    const { horsePositions } = getState();
    const index = postPosition - 2; // The array starts with the 2nd horse in the 0th spot
    const squarePosition = horsePositions[index] + numberOfSquares;
    const newHorsePosition = { postPosition, squarePosition };
    dispatch({ type: SET_POSITION, data: newHorsePosition });
  }
}

export function rollDiceAndMoveHorse(diceTotal) {
  return (dispatch, getState, api) => {
    console.log('diceTotal', diceTotal)
    const { horsePositions } = getState();
    const index = diceTotal - 2; // The array starts with the 2nd horse in the 0th spot
    const squarePosition = horsePositions[index] + 1;
    const newHorsePosition = { diceTotal, squarePosition };
    //dispatch({ type: SET_POSITION, data: newHorsePosition });
  }
}
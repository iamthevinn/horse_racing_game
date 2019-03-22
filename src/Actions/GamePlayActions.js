export const START_GAME = "START_GAME";
export const SET_POSITION_ON_GAME = "SET_POSITION_ON_GAME";
export const SET_DICE_TOTAL = "SET_DICE_TOTAL";
export const SET_GAME_MODE = "SET_GAME_MODE";

export function setHorsePosition(postPosition, squarePosition) {
  return (dispatch, getState, api) => {
    const horsePosition = { postPosition, squarePosition };
    dispatch({ type: SET_POSITION_ON_GAME, data: horsePosition });
  }
}

export function moveHorse(postPosition, numberOfSquares) {
  return (dispatch, getState, api) => {
    const { horsePositions } = getState().gamePlayReducer;
    const index = postPosition - 2; // The array starts with the 2nd horse in the 0th spot
    const squarePosition = horsePositions[index] + numberOfSquares;
    const newHorsePosition = { postPosition, squarePosition };
    dispatch({ type: SET_POSITION_ON_GAME, data: newHorsePosition });
  }
}

export function rolledDiceNowMoveHorse(rolledTotal) {
  return (dispatch, getState, api) => {
    const { horsePositions } = getState().gamePlayReducer;
    const index = rolledTotal - 2; // The array starts with the 2nd horse in the 0th spot
    const squarePosition = horsePositions[index] + 1;
    const newHorsePosition = { postPosition: rolledTotal, squarePosition };
    dispatch({ type: SET_POSITION_ON_GAME, data: newHorsePosition });
    dispatch({ type: SET_DICE_TOTAL, data: rolledTotal });
  }
}

export function setGameMode(gameMode) {
  return (dispatch, getState, api) => {
    dispatch({ type: SET_GAME_MODE, data: gameMode })
  }
}
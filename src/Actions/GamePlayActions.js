import { horses } from '../Data/Horses';

export const RESET_GAME = "START_GAME";
export const SET_POSITION_ON_GAME = "SET_POSITION_ON_GAME";
export const SET_DICE_TOTAL = "SET_DICE_TOTAL";
export const SET_GAME_MODE = "SET_GAME_MODE";
export const SET_LAST_ENTERED_NUMBER = "SET_LAST_ENTERED_NUMBER";
export const SCRATCHED_ROLLED = "SCRATCHED_ROLLED";

export function setLastEnteredNumber(enteredNumber) {
  return (dispatch) => {
    dispatch({ type: SET_LAST_ENTERED_NUMBER, data: enteredNumber });
  }
}

export function setHorsePosition(postPosition, squarePosition) {
  return (dispatch) => {
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
    if (squarePosition >= -5 && squarePosition < horses[index].laneLength) {
      dispatch({ type: SET_POSITION_ON_GAME, data: newHorsePosition });
      dispatch({ type: SET_LAST_ENTERED_NUMBER, data: postPosition });
    }
  }
}

export function rolledDiceNowMoveHorse(rolledTotal) {
  return (dispatch, getState, api) => {
    const { horsePositions } = getState().gamePlayReducer;
    const index = rolledTotal - 2; // The array starts with the 2nd horse in the 0th spot
    const squarePosition = horsePositions[index] + 1;
    const newHorsePosition = { postPosition: rolledTotal, squarePosition };
    if (squarePosition >= -5 && squarePosition < horses[index].laneLength) {
      dispatch({ type: SET_POSITION_ON_GAME, data: newHorsePosition });
      dispatch({ type: SET_DICE_TOTAL, data: rolledTotal });
    }
  }
}

export function setGameMode(gameMode) {
  return (dispatch) => {
    dispatch({ type: SET_GAME_MODE, data: gameMode })
  }
}

export const resetGame = () => (dispatch => dispatch({ type: RESET_GAME }));

export const addPayAmountToGameTotal = (paidAmount, diceInput) => {
  return (dispatch, getState) => {
    const { gameNumberIndex, history } = getState().gamePlayReducer;
    const gameHistory = history[gameNumberIndex];
    const data = {
      gameNumberIndex,
      paidAmount,
      gameHistory,
      diceInput
    }
    dispatch({ type: SCRATCHED_ROLLED, data })

    //dispatch({ type: SET_POSITION_ON_GAME, data: newHorsePosition });
    //dispatch({ type: SET_DICE_TOTAL, data: rolledTotal });
  }
}
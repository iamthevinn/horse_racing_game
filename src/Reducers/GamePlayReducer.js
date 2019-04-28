import { RESET_GAME, SET_POSITION_ON_GAME, SET_DICE_TOTAL, SET_GAME_MODE, SET_LAST_ENTERED_NUMBER } from '../Actions/GamePlayActions'
import { horses } from '../Data/Horses';

export const initialGameState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  lastRoll: undefined,
  numberInputMode: true,
  lastEnteredNumber: undefined,
  history: JSON.parse(localStorage.getItem('history')) || [{ numbers: [], winner: null }],
  gameNumberIndex: JSON.parse(localStorage.getItem('history')) ? Object.keys(JSON.parse(localStorage.getItem('history'))).length : 0,
  winner: undefined
};

export const resetGameState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  lastRoll: undefined,
  numberInputMode: true,
  lastEnteredNumber: undefined,
  winner: undefined
}

export function gamePlayReducer(state = initialGameState, action) {
  switch (action.type) {
    case RESET_GAME: 
      const nextgameNumberIndex = state.gameNumberIndex + 1;
      let history = state.history;
      if (!state.history[state.gameNumberIndex]) {
        history[state.gameNumberIndex] = { numbers: [], winner: null };
      }
      return { ...state, ...resetGameState, history: history, gameNumberIndex: nextgameNumberIndex };
    case SET_POSITION_ON_GAME:
      const squarePosition = action.data.squarePosition;
      const postPosition = action.data.postPosition
      const higherHorses = state.horsePositions.slice(postPosition - 1);
      const lowerHorses = state.horsePositions.slice(0, postPosition - 2);
      const updatedHosePositions = lowerHorses.concat([squarePosition]).concat(higherHorses);
      history = state.history;
      if (state.history[state.gameNumberIndex]) {
        const thisGameRollHistory = [...state.history[state.gameNumberIndex].numbers]; 
        history[state.gameNumberIndex].numbers = [...thisGameRollHistory, postPosition];
      } else {
        const updatedGameRollHistory = [postPosition];
        history[state.gameNumberIndex] = {numbers: updatedGameRollHistory, winner: null };
      }
      const horseLaneLength = horses.find(horse => horse.postPosition === postPosition).laneLength - 1;
      let winner = null;
      if (horseLaneLength === squarePosition) {
        winner = postPosition;
        history[state.gameNumberIndex].winner = postPosition;
      }
      localStorage.setItem('history', JSON.stringify(history));
      return { ...state, horsePositions: updatedHosePositions, history: history, winner };
    case SET_DICE_TOTAL:
      return { ...state, lastRoll: action.data };
    case SET_LAST_ENTERED_NUMBER:
      return { ...state, lastEnteredNumber: action.data };
    case SET_GAME_MODE:
      return { ...state, numberInputMode: action.data };
    default:
      return state;
  }
}

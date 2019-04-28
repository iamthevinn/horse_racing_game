import { RESET_GAME, SET_POSITION_ON_GAME, SET_DICE_TOTAL, SET_GAME_MODE, SET_LAST_ENTERED_NUMBER } from '../Actions/GamePlayActions'

export const initialGameState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  lastRoll: undefined,
  numberInputMode: true,
  lastEnteredNumber: undefined,
  history: JSON.parse(localStorage.getItem('history')) || [{ numbers: [], winner: null }],
  gameNumber: JSON.parse(localStorage.getItem('history')) ? Object.keys(JSON.parse(localStorage.getItem('history'))).length : 0
};

export const resetGameState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  lastRoll: undefined,
  numberInputMode: true,
  lastEnteredNumber: undefined,
  gameNumber: localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')).length + 1 : 0
}

export function gamePlayReducer(state = initialGameState, action) {
  switch (action.type) {
    case RESET_GAME:
      return { ...state, ...resetGameState };
    case SET_POSITION_ON_GAME:
      const higherHorses = state.horsePositions.slice(action.data.postPosition - 1);
      const lowerHorses = state.horsePositions.slice(0, action.data.postPosition - 2);
      const updatedHosePositions = lowerHorses.concat([action.data.squarePosition]).concat(higherHorses);
      let history = state.history;
      if (state.history[state.gameNumber]) {
        const thisGameRollHistory = [...state.history[state.gameNumber].numbers]; 
        history[state.gameNumber].numbers = [...thisGameRollHistory, action.data.postPosition];
      } else {
        const updatedGameRollHistory = [action.data.postPosition];
        history.push({numbers: updatedGameRollHistory, winner: null })
      }
      localStorage.setItem('history', JSON.stringify(history));
      return { ...state, horsePositions: updatedHosePositions, history: history };
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

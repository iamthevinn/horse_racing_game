import { START_GAME, SET_POSITION_ON_GAME, SET_DICE_TOTAL, SET_GAME_MODE, SET_LAST_ENTERED_NUMBER } from '../Actions/GamePlayActions'

export const initialGameState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  lastRoll: undefined,
  numberInputMode: false,
  lastEnteredNumber: undefined
};

export function gamePlayReducer(state = initialGameState, action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, horsePositions: initialGameState };
    case SET_POSITION_ON_GAME:
      const higherHorses = state.horsePositions.slice(action.data.postPosition - 1);
      const lowerHorses = state.horsePositions.slice(0, action.data.postPosition - 2);
      return { ...state, horsePositions: lowerHorses.concat([action.data.squarePosition]).concat(higherHorses) };
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

import { } from '../Actions/GamePlayActions';
import { START_GAME, SET_POSITION } from '../Actions/GamePlayActions'

export const initialGameState = {
  horsePositions: {
    two: -1,
    three: -1,
    four: -1,
    five: -1,
    six: -1,
    seven: -1,
    eight: -1,
    nine: -1,
    ten: -1,
    eleven: -1,
    twelve: -1
  }
};

export function gamePlayReducer(state = initialGameState, action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, horsePositions: initialGameState };
    case SET_POSITION:
      return { ...state, horsePositions: { ...state.horsePositions, ...action.data} };
    default:
      return state;
  }
}

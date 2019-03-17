import { } from '../Actions/GamePlayActions';
import { START_GAME, SET_POSITION, SET_DICE_TOTAL } from '../Actions/GamePlayActions'

export const initialGameState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  diceTotal: undefined,
  gameMode: 'dice'
};
// {postPosition: 4, distance: 2}
export function gamePlayReducer(state = initialGameState, action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, horsePositions: initialGameState };
    case SET_POSITION:
      const higherHorses = state.horsePositions.slice(action.data.postPosition - 1);
      const lowerHorses = state.horsePositions.slice(0, action.data.postPosition - 2);
      return { ...state, horsePositions: lowerHorses.concat([action.data.squarePosition]).concat(higherHorses) };
    case SET_DICE_TOTAL:
      return { ...state, diceTotal: action.data };
    default:
      return state;
  }
}

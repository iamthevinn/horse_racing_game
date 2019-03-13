import { } from '../Actions/GamePlayActions';
import { START_GAME, SET_POSITION } from '../Actions/GamePlayActions'

export const initialGameState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
};
// {postPosition: 4, distance: 2}
export function gamePlayReducer(state = initialGameState, action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, horsePositions: initialGameState };
    case SET_POSITION:
      const higherHorses = state.horsePositions.slice(action.data.postPosition - 1);
      const lowerHorses = state.horsePositions.slice(0, action.data.postPosition - 2);
      console.log(higherHorses);
      console.log(lowerHorses);
      console.log(action.data.distance)
      return { ...state, horsePositions: lowerHorses.concat([action.data.squarePosition]).concat(higherHorses) };
    default:
      return state;
  }
}

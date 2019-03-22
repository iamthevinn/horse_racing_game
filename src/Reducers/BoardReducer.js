import { SET_POSITION_ON_BOARD } from '../Actions/BoardActions'

export const initialBoardState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
};

export function boardReducer(state = initialBoardState, action) {
  switch (action.type) {
    case SET_POSITION_ON_BOARD:
      const higherHorses = state.horsePositions.slice(action.data.postPosition - 1);
      const lowerHorses = state.horsePositions.slice(0, action.data.postPosition - 2);
      return { ...state, horsePositions: lowerHorses.concat([action.data.squarePosition]).concat(higherHorses) };
    default:
      return state;
  }
}

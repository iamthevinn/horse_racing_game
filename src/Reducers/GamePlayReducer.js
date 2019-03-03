import { } from '../Actions/GamePlayActions';
import { START_GAME } from '../Actions/GamePlayActions'

const initialState = {
  horsePositions: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, horsePositions: action.data }
    default:
      return state;
  }
}

export default reducer;
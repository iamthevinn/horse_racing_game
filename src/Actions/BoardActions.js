export const SET_POSITION_ON_BOARD = "SET_POSITION_ON_BOARD";

export function setHorsePosition(postPosition, squarePosition) {
  return (dispatch, getState, api) => {
    const horsePosition = { postPosition, squarePosition };
    dispatch({ type: SET_POSITION_ON_BOARD, data: horsePosition });
  }
}
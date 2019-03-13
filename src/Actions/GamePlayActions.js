export const START_GAME = "START_GAME";
export const SET_POSITION = "SET_POSITION";

export function setHorsePosition(postPosition, squarePosition) {
  return (dispatch, getState, api) => {
    const horsePosition = { postPosition, squarePosition };
    console.log('horsePosition', horsePosition)
    dispatch({ type: SET_POSITION, data: horsePosition });
  }
}

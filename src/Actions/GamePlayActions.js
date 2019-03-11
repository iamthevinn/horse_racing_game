export const START_GAME = "START_GAME";
export const SET_POSITION = "SET_POSITION";

export function setHorsePosition(horse, position) {
  return (dispatch, getState, api) => {
    const horsePosition = {
      [horse]: position
    }
    dispatch({ type: SET_POSITION, data: horsePosition });
  }
}

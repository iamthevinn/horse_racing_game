export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export function toggleDrawer() {
  return (dispatch, getState, api) => {
    dispatch({ type: TOGGLE_DRAWER });
  }
}

import { TOGGLE_DRAWER } from '../Actions/NavigationActions'

export const initialNavigationState = {
  drawerOpen: false
};

export function navigationReducer(state = initialNavigationState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { ...state, drawerOpen: !state.drawerOpen };
    default:
      return state;
  }
}

import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { gamePlayReducer, initialGameState } from '../Reducers/GamePlayReducer'
import { navigationReducer, initialNavigationState } from '../Reducers/NavigationReducer'
import { boardReducer, initialBoardState } from '../Reducers/BoardReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  gamePlayReducer,
  navigationReducer,
  boardReducer
})

export default createStore(
  rootReducer,
  { 
    gamePlayReducer: { ...initialGameState },
    navigationReducer: { ...initialNavigationState },
    boardReducer: { ...initialBoardState }
  },
  composeEnhancers(
    applyMiddleware(thunk)
  )
)


import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { gamePlayReducer, initialGameState } from '../Reducers/GamePlayReducer'
import { navigationReducer, initialNavigationState } from '../Reducers/NavigationReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  gamePlayReducer,
  navigationReducer
})

export default createStore(
  rootReducer,
  { gamePlayReducer: { ...initialGameState }, navigationReducer: { ...initialNavigationState} },
  composeEnhancers(
    applyMiddleware(thunk)
  )
)


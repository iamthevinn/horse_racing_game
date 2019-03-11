import { createStore, compose, applyMiddleware } from 'redux';
import { gamePlayReducer, initialGameState } from '../Reducers/GamePlayReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  gamePlayReducer,
   initialGameState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)


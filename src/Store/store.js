import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../Reducers/GamePlayReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
   reducer,
   undefined,
   composeEnhancers(
     //applyMiddleware(thunk.withExtraArgument('http://newsapi.org/v2/')),
   )
)


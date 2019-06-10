import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { loadState } from './localStorage';
import root from './sagas';

const loggerMiddleware = createLogger();
const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history) {
    let store;

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    const middleware = [loggerMiddleware, sagaMiddleware, routerMiddleware(history)];

   const enhancer = composeEnhancers(applyMiddleware(...middleware));

    store = createStore(
      rootReducer,
      persistedState,
      //applyMiddleware(...middleware),
      enhancer,
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
  

  sagaMiddleware.run(root);

  return store;
}

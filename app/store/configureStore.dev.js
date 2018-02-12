import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import StockApp from '../reducers';
import createLogger from 'redux-logger';

const createDevStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(createLogger())
)(createStore);


export default function configureStore() {
  const store = createDevStoreWithMiddleware(StockApp);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

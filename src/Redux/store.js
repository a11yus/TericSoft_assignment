import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer/reducer';

const rootReducer = reducer;

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// console.log(store.getState());
export default  store ;
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import listReducer from '../reducers/list';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            lists:listReducer
          }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
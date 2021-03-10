import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import {loadState, saveState} from './localstorage';

const persistedState = loadState();

const composeEnhancers =  compose;


const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk)) , 
);

store.subscribe(() => {
    saveState(store.getState());
})

export default store;
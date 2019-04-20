import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import {helloSaga} from '../saga/saga';

// ..
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [""],
    // blacklist: [""]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ...
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
);
const persistor = persistStore(store);

sagaMiddleware.run(helloSaga);

// const action = type => store.dispatch({type});

export {store, persistor};
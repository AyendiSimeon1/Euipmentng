import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import rootReducer from '@/redux/reducers/reducers';




const initialState = {};

const middleware = [thunk];

const persistConfig = {
    key:  'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);

const persistor = persistStore(store)
// const purgePersistedState = async () => {
//     await persistor.purge();
//   };
//   purgePersistedState();
  
export  { store, persistor};

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import sessionStorage from 'reduxjs-toolkit-persist/es/storage/session';
import thunk from 'redux-thunk';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import AuthReducer from './auth/AuthReducer';
import { apiBasePath } from './baseUrl';
import { rtkQueryErrorLogger } from './unAuthoriesed';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: sessionStorage,
    stateReconciler: autoMergeLevel1,
    // transforms: [sessionStorageTransform],
};

const reducers = combineReducers({
    login: AuthReducer,
    api: apiBasePath.reducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
    reducer: _persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(thunk, apiBasePath.middleware, rtkQueryErrorLogger),
    // preloadedState: true,
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authReducer from "./features/authSlice";

const rootReducer = combineReducers({
    auth: authReducer
})

const persistConfig = {
    key: "KEY",
    storage,
    whiteList: [],
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
})

const persistor = persistStore(store)

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export {
    store,
    persistor,
    RootState,
    AppDispatch
}

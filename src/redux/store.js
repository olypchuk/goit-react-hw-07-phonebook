// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './contactsSlice'
import filterSlice from './filterSlice'
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
    
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
}
 const rootReducer = combineReducers({
   contacts: contactsSlice,
    filter: filterSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)
export default persistor



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
  blacklist:['filter']
}
 const Reducer = combineReducers({
   items: contactsSlice,
  filter: filterSlice
 })

const rootReducer = combineReducers({
  contacts:Reducer
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



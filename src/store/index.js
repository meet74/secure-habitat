import { configureStore, combineReducers } from '@reduxjs/toolkit';
import propertiesReducer from './reducers/propertiesReducer';
import userReducer from './reducers/userReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  properties: propertiesReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware:()=>{return []}
});

// Create the persistor
export const persistor = persistStore(store);

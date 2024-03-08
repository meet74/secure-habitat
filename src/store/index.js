import { configureStore, combineReducers } from '@reduxjs/toolkit';
import propertiesReducer from './reducers/propertiesReducer';

const reducers = combineReducers({
    properties: propertiesReducer,
    
  });
  // creating Store
  const store = configureStore({
    reducer: reducers,
  });
  

  export default store;
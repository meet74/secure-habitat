import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './src/pages/onboarding/onboarding';
import { PersistGate } from 'redux-persist/integration/react'
import Navigator from './src/navigator';
import {Provider} from 'react-redux'
import {store,persistor} from './src/store';

export default function App() {
  console.disableYellowBox = true; 
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}></PersistGate>
   <Navigator/>
   </Provider>
  );
}



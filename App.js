import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './src/pages/onboarding/onboarding';
import Navigator from './src/navigator';
import {Provider} from 'react-redux'
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
   <Navigator/>
   </Provider>
  );
}



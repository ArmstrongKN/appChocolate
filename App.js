import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './components/rotas';

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar/>
      <Rotas />
    </NavigationContainer>
  );
}
 
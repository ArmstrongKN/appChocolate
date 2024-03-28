<<<<<<< HEAD
 import {StatusBar} from "expo-status-bar";
 import * as React from "react";
 import Rotas from "./components/home";
 import { NavigationContainer } from "@react-navigation/native";
=======
import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './components/rotas';
>>>>>>> 3e5a137339886f7c05fdaba9752be90502cdd55a

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar/>
      <Rotas />
    </NavigationContainer>
  );
}
 
 import {StatusBar} from "expo-status-bar";
 import * as React from "react";
 import Rotas from "./components/home";
 import { NavigationContainer } from "@react-navigation/native";

 export default function App(){
    return(
        <NavigationContainer>
         <StatusBar/>
         <Rotas/>
        </NavigationContainer>
    );
 }
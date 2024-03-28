<<<<<<< HEAD
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';  

import React from 'react';
import Home from './home';
import Cacau from './cacau';
import Kopenhagen from './kopenhagen';
import Nuts from './nuts';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <NavigationContainer>  
      <Stack.Navigator>
        <Stack.Screen name="Cacau" component={Cacau} options={{headerShown:false, title:"cacau"}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false, title:"home"}}/>
        <Stack.Screen name="Kopenhagen" component={Kopenhagen} options={{headerShown:false, title:"kopenhagen"}}/>
        <Stack.Screen name="Nuts" component={Nuts} options={{headerShown:false, title:"nuts"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
=======
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from './Home';
import Cacau from './cacau';
import Kopenhagen from './kopenhagen';
import Nuts from './nuts';

const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Cacau' component={Cacau}/>
                <Stack.Screen name='Kopenhagen' component={Kopenhagen}/>
                <Stack.Screen name='Nuts' component={Nuts}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
>>>>>>> 3e5a137339886f7c05fdaba9752be90502cdd55a
}


 
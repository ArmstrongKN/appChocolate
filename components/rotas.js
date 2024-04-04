import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 

import Home from './Home';
import Cacau from './cacau';
import Kopenhagen from './kopenhagen';
import Nuts from './nuts';

const Stack = createStackNavigator();

export default function Rotas() {
    return (
       
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Cacau' component={Cacau}/>
                <Stack.Screen name='Kopenhagen' component={Kopenhagen}/>
                <Stack.Screen name='Nuts' component={Nuts}/>
            </Stack.Navigator>
      
    );
}


 
 

 

 

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './screens/Login'
import Main from './screens/Main'

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle:{ backgroundColor:'rgba(255,177,244,1)'} }}>
        <Stack.Screen  name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='Main' component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
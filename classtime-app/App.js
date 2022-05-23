import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';

//Aqui inicia la sección de screens
const Stack = createStackNavigator();

import Login from './screens/Login'
import Main from './screens/Main'

export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'Inter-ExtraBold': require('./assets/static/Inter-ExtraBold.ttf'),
    });
  }

  if(!fontsLoaded){
    return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish = {() =>{
        setFontsLoaded(true);
      }}
      onError={console.warn}
    />
    );
  }
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
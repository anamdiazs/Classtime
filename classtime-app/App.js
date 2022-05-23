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
      'Inter-Thin': require('./assets/static/Inter-Thin.ttf'),
      'Inter-ExtraLight': require('./assets/static/Inter-ExtraLight.ttf'),
      'Inter-Light.ttf': require('./assets/static/Inter-Light.ttf'),
      'Inter-Regular': require('./assets/static/Inter-Regular.ttf'),
      'Inter-Medium': require('./assets/static/Inter-Medium.ttf'),
      'Inter-SemiBold': require('./assets/static/Inter-semiBold.ttf'),
      'Inter-Bold': require('./assets/static/Inter-Bold.ttf'),
      'Inter-ExtraBold': require('./assets/static/Inter-ExtraBold.ttf'),
      'Inter-Black': require('./assets/static/Inter-Black.ttf'),
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
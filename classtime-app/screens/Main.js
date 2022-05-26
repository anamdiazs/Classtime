import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import CustomButton from '../components/CustomButton';

export default function Main({ navigation }) {
  

  /* En esta sección con el setOptions puedes manipular la barra superior de forma
  independiente en vez de hacerlo en el App.js  */
  useEffect(function(){
    navigation.setOptions({ headerShow: true, });
  });

  return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <StatusBar style="dark"></StatusBar>
          <Text style={{fontSize: 33, marginBottom: 2, fontWeight: 'bold'} } >Bienvenido, Terricola.</Text>
          <Text style={{fontSize: 14, marginBottom: 10,} } >Aquí podrás crear grandientes épicos ¿Estas listo?</Text>
        </View>
      </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

import CustomButton from '../components/CustomButton';

export default function Login({ navigation }) {


  async function login(){

    navigation.navigate("Main");
    }
  return (
      <View style={styles.container}>
        <Text style={styles.textTitle} >Classtime</Text>
          
        <TextInput 
          style={styles.input_login} 
          placeholder="Usuario"
          secureTextEntry={false}></TextInput>

        <TextInput style={styles.input_login} placeholder="Contraseña" secureTextEntry={true}></TextInput>
          
        <CustomButton text={"Sign in with Google"} action={login}/>
          
          
          
        <Text style={styles.texto_md}>Una app de estudiantes</Text>
        <Text style={styles.texto_md}>para estudiantes</Text>
    
        <StatusBar style="auto"/>

      </View>

  );
}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  textTitle:{
    fontFamily: 'Inter-SemiBold',
    color: 'black',
    fontSize: 44,
  },
  input_login: {
    width: 350,
    height: 50, 
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 18,
    paddingLeft: 10,
    marginBottom: 20
  },
  boton_login:{
    width: 170,
    height: 45,
    backgroundColor: 'rgba(255,100,000,0)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  texto_md:{
    //backgroundColor: 'red',
    
    display: 'flex',
    flexDirection: "row",
    width: 'auto',
    fontSize: 16,
    color: '#000000',
  },
});


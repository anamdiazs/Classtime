import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Box } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';

const image = { uri: 'https://www.actualidadiphone.com/wp-content/uploads/2015/07/AppleMusicWallpaper_@FlareZephyr_iPads.png' } 
export default function Login({ navigation }) {

  const [username, setUsername ] = useState("Diaz");
  const [password, setPassword ] = useState("");

  async function login(){
    const data={
      user: username,
      pass: password
    }


    try{
      await AsyncStorage.setItem("data", JSON.stringify(data));
      console.log("se guardaron los datos");
    }
    catch(e){

    };
    navigation.navigate("Main");

  }
  return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={{fontSize: 40, marginBottom: 25, fontWeight: 'bold'} } >Hola, {username}.</Text>
          
          <TextInput 
          onChangeText= {setUsername}
          style={styles.input_login} 
          placeholder="Usuario"
          secureTextEntry={false}></TextInput>

          <TextInput onChangeText= {setPassword} style={styles.input_login} placeholder="Contraseña" secureTextEntry={true}></TextInput>
          
          <CustomButton text={"Iniciar Sesión"} action={login}/>
          
          
          
          <Text style={styles.texto_md}>¿Olvidaste tu contraseña?</Text>

          <TouchableOpacity>
            <Text style={styles.texto_md}>toca aquí</Text>
          </TouchableOpacity>
    
          <StatusBar style="auto"/>

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
    color: '#FFFF',
  },
});




/*

<TouchableOpacity style={styles.boton_login}>
  <Text style={{fontSize: 18, color:'rgba(255,255,255,0.5)',}}>Ya tengo cuenta</Text>
</TouchableOpacity> 

*/
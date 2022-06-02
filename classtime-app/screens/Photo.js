import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { UserContext} from '../navigation/AuthProvider'

export default function Photo({navigation}) {
	const {userInfo, setUserInfo} = useContext(UserContext)
	console.log(userInfo)
	const picture = userInfo.picture
	const name = userInfo.name
	console.log('Picture', picture)
  return (
    <View style={styles.container}>
      <Image
        style={styles.custom_image}
        source={{uri:`${picture}`}}
      />
      <Text style={styles.text_welcome}>Bienvenido<Text style={styles.text_name}> {name}</Text></Text>
      <TouchableOpacity style={styles.login_btn} onPress={() => navigation.navigate('Main')}>
        <Text style={{ fontSize: 16, color: "black" }}>Continuar</Text>
      </TouchableOpacity>
      <Text style={styles.text_down}>Una app de estudiantes</Text>
      <Text style={{ fontSize: 13, color: '#444444' }}>para estudiantes</Text>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_btn: {
    backgroundColor: 'white',
    width: 152,
    height: 58,
    borderWidth: 2,
    borderColor: '#000000',
    borderRightColor: '#000000',
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderBottomColor: '#000000',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_welcome: {
    fontSize: 30,
    marginBottom: 25,
    color: '#545555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_name: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_down: {
    fontSize: 13,
    marginTop: 200,
    color: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  custom_image: {
    width: 205,
    height: 205,
    marginTop: 200,
    marginBottom: 18,
    borderRadius: 180,
    borderWidth: 3,
  }
});
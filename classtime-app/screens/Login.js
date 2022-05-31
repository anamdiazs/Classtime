import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import  UserContext  from '../navigation/AuthProvider';
import auth from 'firebase/auth'


export default function Login({ navigation }) {
	const {user, setUser, googleLogin} = useContext(UserContext)
	const [initializing, setInitializing] = useState(true);

	const onAuthStateChanged = (user) => {
		setUser(user)
		setInitializing(false)
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	 }, []);

	 initializing ? true : null

  return (
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Image style={{ width: 69, height: 69, marginRight:8, }} source={require("../assets/logo_paleta.svg")}/>
          <Text style={styles.textTitle} >Classtime</Text>
        </View>
      
        <CustomButton text={"Sign in with Google"}  onPress={ () => googleLogin()}/>
        <Text style={styles.message_start_down}>Una app de estudiantes</Text>
        <Text style={styles.message_start_down}>para estudiantes</Text>
        
        <StatusBar style="auto"/>

      </View>

  );
}
 
const styles = StyleSheet.create({
  title_container:{
    alignItems:'center',
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'space-between',
    paddingBottom: 35,
  },
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
  message_start_down:{
    fontFamily: 'Inter-Light',
    display: 'flex',
    flexDirection: "row",
    width: 'auto',
    fontSize: 16,
    color: 'black',
  },
});


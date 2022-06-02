import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { Button } from 'react-native-elements';
import { UserContext} from '../navigation/AuthProvider'

WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }) {
	const [accessToken, setAccessToken] = useState("");
	const [message, setMessage] = useState("");
	const {userInfo, setUserInfo} = useContext(UserContext)
 
	const [request, response, promptAsync] = Google.useAuthRequest({
	  iosClientId: "874724046701-3jgh4bfnknk0qfrbik4mtkof4c2b6slj.apps.googleusercontent.com",
	  expoClientId: "874724046701-ljnntm435f7jrf85fua5n49akgjpvupr.apps.googleusercontent.com",
	  useProxy: true
	});
 
	useEffect(() => {
	  setMessage(JSON.stringify(response));
	//   console.log('RESPONSE......',JSON.stringify(response))
	  console.log(typeof(response))
	  if (response?.type === "success") {
		 setAccessToken(response.authentication.accessToken);
		// console.log('ACCESS TOKEN >>>>', accessToken)
	  }
	}, [response]);
 
	const getUserData = async () => {
	  let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
		 headers: { Authorization: `Bearer ${accessToken}`}
	  });
 
	  userInfoResponse.json().then(data => {
		// console.log('SETTING USER DATA >>>>')
		setUserInfo(data);
		// console.log('USER DATA SAVED >>>>')
		navigation.navigate("Photo")
	  });

	}

  return (
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Image style={{ width: 69, height: 69, marginRight:8, }} source={require("../assets/logo2_paleta.png")}/>
          <Text style={styles.textTitle} >Classtime</Text>
        </View>
		  <Button 
				style = {{padding:50}}
				title={accessToken ? "Go to my classes " : "Login with Google"}
				onPress={accessToken ? getUserData : () => { promptAsync({useProxy: true, showInRecents: true}) }}
      	/> 
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
	 paddingTop: 20,
  },
  login_btn:{
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
});


import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';


WebBrowser.maybeCompleteAuthSession();

// const firebaseconfig = {};
// firebase.initializeApp(firebaseConfig);

export default function Login({ navigation }) {
	// const {userInfo, setUserInfo, googleLogin} = useContext(UserContext)
	// const [initializing, setInitializing] = useState(true);

	const [accessToken, setAccessToken] = useState();
	const [userInfo, setUserInfo] = useState();
	const [message, setMessage] = useState();
 
	const [request, response, promptAsync] = Google.useAuthRequest({
	  iosClientId: "874724046701-3jgh4bfnknk0qfrbik4mtkof4c2b6slj.apps.googleusercontent.com",
	  expoClientId: "694235095257-7t7h7mv877d2jfu7r508ct1egmesbqdm.apps.googleusercontent.com"
	});
 
	useEffect(() => {
	  setMessage(JSON.stringify(response));
	  if (response === "success") {
		 setAccessToken(response.authentication.accessToken);
	  }
	}, [response]);
 
	const getUserData = async () => {
	  let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
		 headers: { Authorization: `Bearer ${accessToken}`}
	  });
 
	  userInfoResponse.json().then(data => {
		 setUserInfo(data);
	  });
	}

	console.log(userData)
 

  return (
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Image style={{ width: 69, height: 69, marginRight:8, }} source={require("../assets/logo_paleta.svg")}/>
          <Text style={styles.textTitle} >Classtime</Text>
        </View>
		  <Button 
        	title={accessToken ? "Get User Data" : "Login"}
        	onPress={accessToken ? getUserData : () => { promptAsync({useProxy: false, showInRecents: true}) }}
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
  },
});


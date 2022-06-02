// import React from "react";
// import { createContext } from "react";
// import { useState } from 'react'
// import * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';

// WebBrowser.maybeCompleteAuthSession();

// export const UserContext = createContext();

// export const AuthProvider = ({ children }) => {
	
// 	const [accessToken, setAccessToken] = useState();
// 	const [userInfo, setUserInfo] = useState();
// 	const [message, setMessage] = useState();
	
// 	return (
// 		<UserContext.Provider
// 		value = {{
// 			userInfo,
// 			setUserInfo, 
// 			googleLogin: async () => {
// 				console.log('Inside google login')
// 				try{
// 					const [request, response, promptAsync] = Google.useAuthRequest({
// 					iosClientId: "874724046701-3jgh4bfnknk0qfrbik4mtkof4c2b6slj.apps.googleusercontent.com",
// 					expoClientId: "694235095257-7t7h7mv877d2jfu7r508ct1egmesbqdm.apps.googleusercontent.com"
// 					});


// 					} catch(err){
// 						console.log('Inside catch block' )
// 						console.log('Something went wrong...', err)
// 					}
// 				}
// 			}}
// 		>
// 			{children}
// 		</UserContext.Provider>

// 	)

// }

// export default UserContext
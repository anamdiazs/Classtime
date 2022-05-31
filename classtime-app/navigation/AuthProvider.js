import React from "react";
import auth from 'firebase/compat/auth'
import { createContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react'

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null)

	return (
		<UserContext.Provider
			value = {{
				user,
				setUser, 
				googleLogin: async () => {
					try{
						const { idToken } = await GoogleSignin.signIn();
						const googleProvider = new GoogleAuthProvider
						const googleCredential = googleProvider.credential(idToken);

						await auth().signInWithCredential(googleCredential);

					} catch(err){
						console.log('Something went wrong...', err)
					}
				}
			}}
		>
			{children}
		</UserContext.Provider>

	)

}

export default UserContext
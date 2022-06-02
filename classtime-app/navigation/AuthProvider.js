import React, { useState, useContext, createContext } from "react";

export const UserContext = createContext();

export const AuthProvider = ({children}) => {
		const [userInfo, setUserInfo] = useState("")
		return (
			<UserContext.Provider value={{userInfo, setUserInfo}}>
				{children}
			</UserContext.Provider>
	 
		)
	}


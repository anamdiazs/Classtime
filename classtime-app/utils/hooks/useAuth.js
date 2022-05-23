import React from 'react'
import { getAuth, onAuthStateChanged, User} from 'firebase/auth'
import { useState } from 'react';

const auth  =  getAuth();

export default function useAuth() {

	const [user, setUser] = useState('');
	
	useEffect(() => {
		const authStatus = onAuthStateChanged( auth, (user) => {
			user ? setUser(user) : setUser(null)
		})
		return authStatus;	
	}, [])

	return {
		user 
	}
}

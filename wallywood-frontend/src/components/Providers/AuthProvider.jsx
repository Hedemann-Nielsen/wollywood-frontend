import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [loginData, setLoginData] = useState('');
	const isLoggedIn = !!loginData;

	useEffect(() => {
		if (sessionStorage.getItem('access_token')) {
			setLoginData(JSON.parse(sessionStorage.getItem('access_token')));
		}
	}, [children]);

	return (
		<AuthContext.Provider value={{ loginData, setLoginData, isLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

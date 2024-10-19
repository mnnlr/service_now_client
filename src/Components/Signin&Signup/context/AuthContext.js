import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie";

export const AuthContext = createContext();


export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [authLSToken, setAuthLSToken] = useState(null);
    const [authCookieToken, setAuthCookieToken] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) || null;
        const LocalStoreToken = localStorage.getItem('access_token') || null;
        if (user) {
            setAuthUser(user);
            setAuthLSToken(LocalStoreToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, authLSToken, setAuthLSToken, authCookieToken, setAuthCookieToken }}>
            {children}
        </AuthContext.Provider>
    );
}
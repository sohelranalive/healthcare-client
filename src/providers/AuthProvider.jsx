import { createContext } from "react";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const userInfo = { name: 'Sohel' }

    const authInfo = { userInfo }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
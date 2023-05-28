import React, { createContext, useState, } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [userName, setUserName] = useState("bob")
    const [userEmail, setUserEmail] = useState("bob@bbb")

    return(
        <AuthContext.Provider value={{
            name: userName,
            email: userEmail
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;


import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext({})

const AuthProvider=({children}:React.PropsWithChildren)=>{
const [isLoggedIn, setIsLoggedIn]=useState(false);

return(
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
)}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider

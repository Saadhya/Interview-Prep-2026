import { createContext, useContext, useMemo, useState } from "react";
import ThemeProvider from "./ThemeContext";

// create state to pass in the context api 
const [userData, setUserData]=useState({})
// create context
const UserContext = createContext<any>({});

// usecontext hook to create custom hook
export const useUserContext=()=> useContext(UserContext)

// create provider with children in params and send value through useMemo() hook
const UserProvider=({children}:any)=>{
    const memoizedValue = useMemo(()=>({userData,setUserData}),[userData]);
    return(
        <UserContext.Provider value={memoizedValue}>
            {children}
        </UserContext.Provider>
    )   
}
// export default UserContext
export default UserProvider;

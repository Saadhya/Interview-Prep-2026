import { createContext, useContext, useMemo, useState } from "react";
// Q) Share state across distant components without heavy prop drilling (and keep perf good)
// const [theme, setTheme] = useState('light');

const ThemeContext=createContext<any>({});

export const useTheme=()=>useContext(ThemeContext);

function ThemeProvider({children}:any){
    const [theme, setTheme] = useState('light');
    const memoizedValue = useMemo(()=>({theme, setTheme}),[theme]);
    return(
        <ThemeContext.Provider value={memoizedValue}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider;
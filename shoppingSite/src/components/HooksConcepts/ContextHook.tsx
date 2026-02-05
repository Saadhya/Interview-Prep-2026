import { createContext, useContext, useMemo, useState } from 'react'

type CountContextValue = {
    count: number;
    increment: () => void;
    msg: string;
    setMsg: (msg: string) => void;
};

const CountContext = createContext<CountContextValue | null>(null);
// provider 
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount]=useState(11)
    const [msg, setMsg]=useState("helo there!")
    const increment = ()=>setCount(prev=> prev+1)

    const memoizedValue= useMemo(()=> ({count, increment, msg, setMsg})
    ,[count, msg])
    return(
        <CountContext.Provider value={memoizedValue}>
            {children}
        </CountContext.Provider>
    )
}
// consumer
const useCount = () => useContext(CountContext);


const ContextHook = () => {
  return (
    <div>
      <h1>Context Hook</h1>
      <ContextProvider>
          <CustomButton/>        
      </ContextProvider>
    </div>
  )
}

const CustomButton=()=>{
    const count=useCount()
    // console.log(count)

    return(
        <div className='context-section'>
            <input type='text' value={count?.msg} onChange={(e)=>count?.setMsg(e.target.value)}/>
            <button className='primary-btn' onClick={()=>count?.increment()}>Count</button>
            <Text/>
        </div>
    )
}

const Text=()=>{
    const {msg, count} = useCount()!;

    return(
        <div>

            <p>{msg}</p>
            <p>{count}</p>
        
        </div>
    )
}
export default ContextHook

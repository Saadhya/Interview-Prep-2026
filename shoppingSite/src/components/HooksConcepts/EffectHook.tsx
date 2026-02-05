import React, { useEffect, useState } from 'react'

const EffectHook = () => {
    const [count, setCount]=useState(3);
    const [prods, setProds]=useState<any[]>([])
    // though in react 19 useffect is handling the first render itself and not showing error without dependency array
    // but this is good practice to use state in the array block
    useEffect(()=>{
      const url = `https://dummyjson.com/products/${count}`;
      fetch(url)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            // keep old data and add new data
            setProds((prev) => (prev.some((p) => p?.id === data?.id) ? prev : [...prev, data]))
        })
        .catch(err=>console.log(err))
    },[count])

    const [counter, setCounter]= useState(0);
    useEffect(()=>{
        // console.log("effect called");
        
        const timerId= setInterval(() => {
            setCounter(prev=> prev+1)
            // console.log(counter); //not updating state
        }, 1000);

        // otherwise it will create another interval before deleting previous interval.
        return ()=>{
        // console.log("cleanup called");
            clearInterval(timerId);
        }
    },[counter])

    const addresses=[
        {city:'Navi Mumbai', pincode:'400029', isDefault:true},
        {city:'Pune', pincode:'411001', isDefault:false},
        {city:'Mumbai', pincode:'400001', isDefault:false},
        {city:'Bangalore', pincode:'560001', isDefault:false},
        {city:'Hyderabad', pincode:'500001', isDefault:true},
    ]

    const [defaultAddres, setDefaultAddress]=useState(addresses.find(({isDefault})=> isDefault));
    const [pincode, setPincode]=useState('');

    const checkPincode=()=>{
        const foundadd= addresses.find((addr)=> addr.pincode === pincode.trim());
        setDefaultAddress(foundadd);
    }
    useEffect(()=>{
        console.log("effect called for address");
        // always set the object value in the array, never set the complete object
        // as during rerender it will create new object evertime on state update
        // so it will not update the state
    },[defaultAddres?.pincode])
  return (
    <div>
        <h1>Effect Hooks:</h1>
        
        <h2>Search pincode</h2>
        <input type="text" value={pincode} onChange={(e)=> setPincode(e.target.value)} />
        <button onClick={checkPincode}>Search</button>
        <h3>Default Address:</h3>
        <p>{defaultAddres?.city}</p>
        <p>{defaultAddres?.pincode}</p>

        <h2>Automatic Counter:</h2>
        {counter}

        <h2>Click count below:</h2>
        <button onClick={()=> setCount(pre=>pre+1)}>Count : {count}</button>
        <div style={{ marginTop: 12 }}>
          {prods.map((p) => (
            <div key={p.id} style={{ padding: 8, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontWeight: 700 }}>{p.title}</div>
              <div style={{ opacity: 0.8 }}>₹{p.price}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default EffectHook;

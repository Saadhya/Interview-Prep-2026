import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext({})


const ProductProvider=({children}:{children:React.ReactNode})=>{
    
const [products, setProducts] = useState<any>([]);
    
return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}
const useProducts=()=>useContext(ProductContext);


export {ProductProvider, useProducts}

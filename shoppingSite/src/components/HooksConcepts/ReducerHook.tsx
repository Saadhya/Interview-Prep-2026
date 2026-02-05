import { useEffect, useReducer, useState } from "react";
import { countReducer } from "./countReducer";
import { filterReducer } from "./filterReducer";
import './HookStyle.css'
import { fetchProducts } from "../CustomHooks/Products";

const ReducerHook = () => {
  const initialState = {
    count: 0,
  };
  //local dispatch and countreducer is also specific to this component only
  const [state, countDispatch] = useReducer(countReducer, initialState);
  const handleDec = () => {
    countDispatch({ type: "decrement" });
  };
  return (
    <div>
      <h1>Reducer Hook</h1>
      <h2>{state?.count}</h2>
      {/* anything we can provide inside dispatch function like - abc:'helo there' (key-value pair) */}
      <button onClick={() => countDispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={handleDec} disabled={state.count === 0}>
        Decrement
      </button>

      <ProductFilter/>
    </div>
  );
};

const ProductFilter = () => {
   const [products, setProducts] = useState<any>([]);
    useEffect(()=>{
      fetchProducts().then((data)=>{
        setProducts(data)
        // console.log(data)
      });
    },[setProducts]);

  const prodState = {
    price: "",
    discount: "",//discountPercentage
    rating: "",
  };
  const [filters, filterDispatch] = useReducer(filterReducer, prodState);
 
  const handlePrice=(e:any)=>{
    filterDispatch({type:"price",payload:e.target.value})
  }
  const handleDiscount=(e:any)=>{
    filterDispatch({type:"discount",payload:e.target.value})
  }
  const handleRating=(e:any)=>{
    filterDispatch({type:"rating",payload:e.target.value})
  }
  const filteredProducts=products.filter((prod:any)=>{
    return prod.price>=filters.price && prod.discountPercentage>=filters.discount 
    && prod.rating>=filters.rating
  })
  return (
    <div className="container">
      <h1>Reducer Hook</h1>

        <h2>Filter products:</h2>
        <div className="filters">
            <input type="text" value={filters.price} placeholder="Enter Price" onChange={handlePrice}/>   
            <input type="text" value={filters.discount} placeholder="Enter Discounts" onChange={handleDiscount}/>
            <input type="text" value={filters.rating} placeholder="Enter Rating" onChange={handleRating}/>
        </div>
      <div className="products-table">
        
          {filteredProducts?.map((prod: any) => (
            <div className="product-box" key={prod.id}>
                <h3 className="title">{prod.title}</h3>
                <p className="para">Price: {prod.price}</p>
                <p className="para">Discount: {prod.discountPercentage}</p>
                <p className="para">Rating: {prod.rating}</p>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default ReducerHook;

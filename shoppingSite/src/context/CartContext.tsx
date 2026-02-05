import { useReducer, createContext, useContext, useMemo } from "react";

const cartValue={
  cart:[],
  cartDispatch:(action:any)=>{}
}
const CartContext = createContext(cartValue);

// provider
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    cart: [],
  };

  const cartReducerFun = (state:any, action:any) => {
    // console.log("action", action);
    
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((item:any) => item.id !== action.payload.id)
        }
    
      default:
        return state;
    }    
  };

  const [{cart}, cartDispatch] = useReducer(cartReducerFun, initialState);
  
  const memoizedValue = useMemo(() => ({cart, cartDispatch}), [cart]);
  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  );
};

// consumer
export const useCart= ()=> useContext(CartContext);

export default CartProvider;

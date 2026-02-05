import productReducer from "./productReducer"
import cartReducer from "./cartReducer"
import counterReducer from "../components/Counter/counterReducer"

export const reducers={
    products: productReducer,
    cart: cartReducer,
    counter: counterReducer
}
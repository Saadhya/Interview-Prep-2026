import productReducer from "./productReducer"
import cartReducer from "./cartReducer"
import counterReducer from "../components/Counter/counterReducer"
import todoReducer from "../components/Todo/TodoSlice"
import postReducer from '../components/ThunkPosts/PostSlice'
import movieReducer from '../components/MoviesApp/MovieSlice'

export const reducers={
    products: productReducer,
    cart: cartReducer,
    counter: counterReducer,
    todo: todoReducer,
    post: postReducer,
    movies: movieReducer
}
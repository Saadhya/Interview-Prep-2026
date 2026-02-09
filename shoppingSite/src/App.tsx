import "./App.css";
import Header from "./screens/Header/Header";
import Footer from "./screens/Footer/Footer";
import DemoScreen from "./screens/DemoScreen";
import HookScreen from "./screens/HookScreen";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./screens/ProductList";
import CartScreen from "./screens/CartScreen";
import Login from "./screens/Auth/Login";
import { useAuth } from "./context/AuthContext";
import { useEffect } from "react";
import ProductView from "./components/ProductView";
import ContextReducer from "./components/HooksConcepts/ContextReducer";
import TodoApp from "./components/Todo";
import ThunkPosts from "./components/ThunkPosts";
import { Counter } from "./components/Counter/Counter";
import MoviesApp from "./components/MoviesApp";

function App() {
  // const { isLoggedIn } = useAuth() as any;
  // const nav = useNavigate();
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     nav("/login");
  //   }
  //   // nav("/");
  //   // console.log(isLoggedIn);
  // }, [isLoggedIn]);

  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          {/* {isLoggedIn ? ( */}
          <Route path="/" element={<Layout />}>
            <Route index element={<DemoScreen />} />
            <Route path="hook" element={<HookScreen />} />
            <Route path="cart" element={<CartScreen />} />            
            <Route path="products" element={<ContextReducer />} />
            <Route path="productDetails/:id" element={<ProductView />} />
            <Route path="login" element={<Login />} />

            <Route path="todo" element={<TodoApp />} />
            <Route path="posts" element={<ThunkPosts />} />
            <Route path="counter" element={<Counter />} />
            <Route path="movies" element={<MoviesApp />} />

          </Route>
          {/* )} */}
        </Routes>
      </div>
    </div>
  );
}

const Layout = () => {
  return (
    <>
      <Header cartCount={2} />
      {/* <Outlet context={[data, setData]} /> {/* Pass context */}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

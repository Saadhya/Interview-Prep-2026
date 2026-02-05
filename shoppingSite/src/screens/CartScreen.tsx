import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const CartScreen = () => {
  const { isLoggedIn } = useAuth() as any;
  const nav = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      nav("/login");
    }
  }, [isLoggedIn]);
  
  return (
    <div>
      <h1>Add To Cart</h1>
    </div>
  );
};

export default CartScreen;

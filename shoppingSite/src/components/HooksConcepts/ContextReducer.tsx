import { useEffect, useState } from "react";
import { fetchProducts } from "../CustomHooks/Products";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const ContextReducer = () => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      // console.log(data)
    });
  }, [setProducts]);

  const cart = useCart();
  // console.log(cart);

  const addToCart = (prod: any) => {
    const check = cart?.cart.find((item: any) => item.id === prod.id);
    if (check) {
      return;
    }
    cart?.cartDispatch({ type: "ADD_TO_CART", payload: prod });
  };
  const removeFromCart = (prod: any) => {
    const check = cart?.cart.find((item: any) => item.id === prod.id);
    if (!check) {
      return;
    }
    cart?.cartDispatch({ type: "REMOVE_FROM_CART", payload: prod });
  };
const nav = useNavigate()
  const viewProduct=(prod:any)=>{
    nav(`/productDetails/${prod?.id}`)
  }
  return (
    <div className="flex flex-col border">
      <h2>Context with Reducer</h2>

      <div className="products-table">
        {products?.map((prod: any) => (
          <div className="product-box" key={prod.id} onClick={() => viewProduct(prod)}>
            <h3 className="title">{prod.title}</h3>
            <p className="para">Price: {prod.price}</p>
            <p className="para">Discount: {prod.discountPercentage}</p>
            {/* <p className="para">Rating: {prod.rating}</p> */}
            <div className="action-box">
              <button className="primary-btn" onClick={() => addToCart(prod)}>
                Add to Cart
              </button>
              <button className="red-btn" onClick={() => removeFromCart(prod)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* pagination section */}
      <div className="pagination"></div>
    </div>
  );
};

export default ContextReducer;

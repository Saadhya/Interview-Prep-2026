import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const cart = useCart();
  
  return (
    <div>
        <h2>Shopee</h2>
        <p> Cart count - {cart.cart.length}</p>
    </div>
  )
}

export default Navbar

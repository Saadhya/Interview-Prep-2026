import CartProvider from "../context/CartContext";
import ContextHook from "../components/HooksConcepts/ContextHook";
import ContextReducer from "../components/HooksConcepts/ContextReducer";
import EffectHook from "../components/HooksConcepts/EffectHook";
import Navbar from "../components/HooksConcepts/Navbar";
import ReducerHook from "../components/HooksConcepts/ReducerHook";
import '../components/HooksConcepts/HookStyle.css';


const HookScreen = () => {
  return (
    <div>
      <EffectHook />
      <ReducerHook />
      <ContextHook/>
      <CartProvider>
        <ContextReducer/>
        <Navbar/>
      </CartProvider>
    </div>
  );
};

export default HookScreen;

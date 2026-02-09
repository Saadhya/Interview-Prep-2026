import { useState } from "react";
import CustomToggle from "../components/CustomToggle";
import PaginatedList from "../components/PaginatedList";
import MultipleUrls from "../components/HooksConcepts/MultipleUrls";
import { NavLink } from "react-router-dom";
import { Counter } from "../components/Counter/Counter";

const DemoScreen = () => {
  const [on, setOn] = useState(false);

  // const [items, setItems]=useState<any>([]);
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
  }));

  const getstyles = (isActive: boolean) => {
    return {
      color: isActive ? "red" : "black",
    };
  };
  return (
    <div>
      <h1 className="app__title">Featured Components</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <NavLink to="/" style={getstyles as any}>Home</NavLink>
        <NavLink to="/hook" style={getstyles as any}>Hook</NavLink>
        <NavLink to="/cart" style={getstyles as any}>Cart</NavLink>
        <NavLink to="/products" style={getstyles as any}>Products</NavLink>
      </div>

      <h2>Controlled vs Uncontrolled components: Custom Toggle</h2>
      {/* // Uncontrolled */}
      <CustomToggle
        defaultOn={true}
        onChange={(next) => console.log(next)}
        label="Wi‑Fi"
      />

      {/* // Controlled */}
      <CustomToggle on={on} onChange={setOn} label="Bluetooth" />

      {/* js concepts */}
      <MultipleUrls />

      {/* <p className="app__subtitle">Search Products here</p>
        <div style={{ marginTop: 16 }}>
          <ProductList />
        </div> */}

      {/* paginated list */}
      <PaginatedList items={items} />

      {/* counter with redux */}
      <Counter/>
    </div>
  );
};

export default DemoScreen;

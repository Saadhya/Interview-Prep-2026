import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id?: string | number;
  title?: string;
  price?: number;
  image?: string;
};

type ProductsState = {
  products: Product[];
};

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
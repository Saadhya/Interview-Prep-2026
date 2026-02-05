export const fetchProducts = async () => {
  try {
    const url = "https://dummyjson.com/products";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const prods = await response.json();
    // console.log(prods.products);
    return prods.products;
  } catch (error) {
    throw error;
  }

};

export const fetchProductDetails = async (id: string) => {
  try {
    const url = `https://dummyjson.com/products/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch product details", {
        cause: response.status,
      });
    }
    const prods = await response.json();
    return prods;
  } catch (error) {
    throw error;
  }

  // console.log(prods.products);
};

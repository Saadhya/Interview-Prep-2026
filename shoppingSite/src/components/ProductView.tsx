import { useParams } from "react-router-dom";
import "./ProductStyles.css";
import { fetchProductDetails } from "./CustomHooks/Products";
import { useEffect, useState } from "react";

const ProductView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductDetails(id as string);
        setProduct(data);
        console.log(data);
        
      } catch (error) {
        console.error(error);
      }
    };

    if (id) fetchData();
  }, [id]);

  return (
    <div>
      {/* create a product card with addtocart button and title, desc, price */}
      <div className="productCard">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <b>{product?.brand}</b>
        <p>{product?.rating}</p>
        <button>Add to Cart</button>
      </div>

      {/* add styles to it */}
    </div>
  );
};
const styles = {
  productCard: {
    display: "flex",
  },
};

export default ProductView;

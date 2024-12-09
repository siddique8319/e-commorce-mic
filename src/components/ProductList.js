import React, { useEffect, useState } from "react";
import { fetchProducts, addToCart } from "../services/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product).then(() => alert("Added to cart!"));
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

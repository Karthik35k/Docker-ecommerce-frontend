import React, { useEffect, useState } from "react";
import { useCart } from "../context/components/CartContext";
import { getProducts } from "../context/Service/productService";
import { useNavigate } from "react-router-dom";
import "../style.css";

const BASE_URL = 'http://localhost:9090/back1';

const Mobiles = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts("mobiles"); // Fetch only mobile category
        setProducts(data);
      } catch (error) {
        console.error("Error fetching mobiles:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to the cart!");
      navigate("login"); // Use relative path for nested route
      return;
    }
    addToCart(product);
    navigate("cart"); // Use relative path for nested route
  };

  return (
    <div className="product-container">
      <h2>Mobiles</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={`${BASE_URL}/api/products/images/${product.imagePath}`}
                alt={product.name}
              />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No mobiles available.</p>
        )}
      </div>
    </div>
  );
};

export default Mobiles;
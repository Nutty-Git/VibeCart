import { useEffect, useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5050/api/products");
        setProducts(res.data);
      } catch (err) {
        toast.error("Failed to load products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-12 text-gray-900">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-t-xl">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 text-lg mb-4">₹{product.price}</p>
              <button
                onClick={() => {
                  dispatch({ type: "ADD", payload: product });
                  navigate("/cart");
                }}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
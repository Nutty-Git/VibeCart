import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-10 text-gray-900">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 text-xl">
          Your cart is empty.
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h2 className="text-xl font-serif font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600">₹{item.price} × {item.quantity}</p>
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: item._id })}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-xl font-semibold text-gray-800 mt-8">
            Total: ₹{total}
          </div>

          <div className="text-right mt-4">
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    toast.success("Order placed successfully!");
    dispatch({ type: "CLEAR" });
    navigate("/order-confirmation", {
      state: {
        order: {
          items: cart,
          total,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-10 text-gray-900">
        Checkout
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Shipping Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Shipping Info
          </h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item._id} className="flex justify-between text-gray-700">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="text-right text-xl font-semibold text-gray-900 border-t pt-4">
            Total: ₹{total}
          </div>
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

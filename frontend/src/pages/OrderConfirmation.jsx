import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  if (!order) {
    return <div className="text-center mt-20 text-xl">No order found.</div>;
  }

  const estimatedDate = new Date();
  estimatedDate.setDate(estimatedDate.getDate() + 5); // 5-day delivery
  const formattedDate = estimatedDate.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-10 text-green-700">
        Order Confirmed!
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-lg text-gray-700">
          Thank you for your purchase. Your order will be delivered by{" "}
          <span className="font-semibold text-gray-900">{formattedDate}</span>.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Order Summary</h2>
        <ul className="space-y-2">
          {order.items.map((item) => (
            <li key={item._id} className="flex justify-between text-gray-700">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>

        <div className="text-right text-xl font-semibold text-gray-900 border-t pt-4">
          Total Paid: ₹{order.total}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
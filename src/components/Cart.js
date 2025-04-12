import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md mb-4"
          >
            🗑️ Clear Cart
          </button>

          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;

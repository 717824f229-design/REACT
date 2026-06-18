import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart">
        <h1>Shopping Cart</h1>

        {cart.map((item, index) => (
          <div
            key={index}
            className="cart-item"
          >
            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button
              onClick={() =>
                removeFromCart(index)
              }
            >
              Remove
            </button>
          </div>
        ))}

        <h2>Total: ₹{total.toFixed(2)}</h2>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
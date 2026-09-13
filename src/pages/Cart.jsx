import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();
  if (cart.length === 0) {
    return (
      <main>
        <h1>Your Cart 🛒</h1>
        <p>Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Your Cart 🛒</h1>

      {cart.map((item) => (
        <article key={item.id}>
          <img src={item.image} alt={item.title} width="150" />

          <h2>{item.title}</h2>

          <p>Price: ${item.price}</p>

          {/* Quantity */}
          <div>
            <button onClick={() => decreaseQuantity(item.id)}>−</button>

            <span>{item.quantity}</span>

            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          {/* Subtotal */}
          <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

          {/* Remove */}
          <button onClick={() => removeFromCart(item.id)}>Remove ❌</button>
        </article>
      ))}

      {/* Total */}
      <h2>Total: ${total.toFixed(2)}</h2>
      <button onClick={() => navigate("/checkout")}>
        Proceed to Checkout 💳
      </button>
    </main>
  );
}

export default Cart;

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, placeOrder } = useCart();
  const navigate = useNavigate();

  // Customer information
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Payment
  const [payment, setPayment] = useState("telebirr");
  const [transactionRef, setTransactionRef] = useState("");

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Submit order
  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !phone || !address) {
      alert("Please fill in all customer information.");
      return;
    }

    if (payment === "telebirr" && !transactionRef) {
      alert("Please enter your TeleBirr transaction reference.");
      return;
    }

    placeOrder({
      name,
      phone,
      address,
      payment: payment === "telebirr" ? "TeleBirr" : "Cash on Delivery",
      transactionRef,
    });

    alert("Order placed successfully! 🎉");

    navigate("/");
  }
  // Empty cart
  if (cart.length === 0) {
    return (
      <main>
        <h1>Checkout 🛒</h1>

        <p>Your cart is empty.</p>

        <button onClick={() => navigate("/products")}>Go Shopping</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Checkout 💳</h1>

      {/* Order Summary */}
      <section>
        <h2>Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.title} × {item.quantity}
            </p>

            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}

        <h2>Total: ${total.toFixed(2)}</h2>
      </section>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit}>
        <h2>Customer Information</h2>

        {/* Name */}
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <br />
        <br />

        {/* Phone */}
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="09xxxxxxxx"
          />
        </label>

        <br />
        <br />

        {/* Address */}
        <label>
          Address:
          <textarea
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Enter delivery address"
          />
        </label>

        <br />

        {/* Payment */}
        <h2>Payment Method</h2>

        {/* TeleBirr */}
        <label>
          <input
            type="radio"
            value="telebirr"
            checked={payment === "telebirr"}
            onChange={(event) => setPayment(event.target.value)}
          />
          TeleBirr 📱
        </label>

        <br />

        {/* Cash */}
        <label>
          <input
            type="radio"
            value="cash"
            checked={payment === "cash"}
            onChange={(event) => setPayment(event.target.value)}
          />
          Cash on Delivery 💵
        </label>

        <br />
        <br />

        {/* TeleBirr Details */}
        {payment === "telebirr" && (
          <section>
            <h3>TeleBirr Payment 📱</h3>

            <p>Complete your payment using TeleBirr.</p>

            <input
              type="text"
              value={transactionRef}
              onChange={(event) => setTransactionRef(event.target.value)}
              placeholder="Enter TeleBirr transaction reference"
            />
          </section>
        )}

        <br />

        {/* Place Order */}
        <button type="submit">Place Order 🎉</button>
      </form>
    </main>
  );
}

export default Checkout;

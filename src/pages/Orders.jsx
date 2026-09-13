import { useCart } from "../context/CartContext";

function Orders() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <main className="orders-page">
        <h1>My Orders 📦</h1>
        <p>You have no orders yet.</p>
      </main>
    );
  }

  return (
    <main className="orders-page">
      <h1>My Orders 📦</h1>

      {orders.map((order) => (
        <section className="order-card" key={order.id}>
          <div className="order-header">
            <div>
              <h2>Order #{order.id}</h2>
              <p>📅 {order.date}</p>
            </div>

            <span className="order-status">✅ {order.status}</span>
          </div>

          <div className="order-items">
            {order.items.map((item) => (
              <article key={item.id}>
                <img src={item.image} alt={item.title} />

                <div>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="order-footer">
            <p>
              Payment: <strong>{order.payment}</strong>
            </p>

            <h2>Total: ${order.total.toFixed(2)}</h2>
          </div>
        </section>
      ))}
    </main>
  );
}

export default Orders;

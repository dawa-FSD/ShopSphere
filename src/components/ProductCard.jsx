import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(product);

    alert(`${product.title} added to cart! 🛒`);
  }

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />

        <span className="category-badge">{product.category}</span>
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>

        <p>⭐ {product.rating}</p>

        <p className="description">{product.description}</p>

        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>

          <button onClick={handleAddToCart}>🛒 Add</button>
        </div>

        <Link to={`/products/${product.id}`} className="details-button">
          View Details →
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;

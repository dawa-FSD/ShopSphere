import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main>
        <h1>Product Not Found ❌</h1>

        <button onClick={() => navigate("/products")}>Back to Products</button>
      </main>
    );
  }

  function handleAddToCart() {
    addToCart(product);
    alert(`${product.title} added to cart! 🛒`);
  }

  return (
    <main>
      <button onClick={() => navigate("/products")}>← Back</button>

      <section>
        <img src={product.image} alt={product.title} width="400" />

        <div>
          <h1>{product.title}</h1>

          <p>Category: {product.category}</p>

          <p>Price: ${product.price}</p>

          <p>⭐ Rating: {product.rating}</p>

          <p>{product.description}</p>

          <button onClick={handleAddToCart}>Add to Cart 🛒</button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;

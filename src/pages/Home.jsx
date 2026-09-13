import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="home-page">
      <section className="hero">
        <div>
          <p className="hero-small">WELCOME TO SHOPSPHERE</p>

          <h1>
            Shop Smart.
            <br />
            Live Better. 🛍️
          </h1>

          <p>
            Discover quality products at affordable prices. Everything you need,
            all in one place.
          </p>

          <Link to="/products" className="hero-button">
            Shop Now →
          </Link>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>
        <p>Check out some of our popular products.</p>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;

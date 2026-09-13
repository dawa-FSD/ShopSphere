import { Link } from "react-router-dom";
import products from "../data/products";

function Categories() {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <main className="categories-page">
      <h1>Shop by Category 📂</h1>
      <p>Choose a category and discover our products.</p>

      <section className="category-grid">
        {categories.map((category) => {
          const count = products.filter(
            (product) => product.category === category,
          ).length;

          return (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="category-card"
            >
              <span>🛍️</span>
              <h2>{category}</h2>
              <p>
                {count} product{count !== 1 ? "s" : ""}
              </p>
              <strong>Explore →</strong>
            </Link>
          );
        })}
      </section>
    </main>
  );
}

export default Categories;

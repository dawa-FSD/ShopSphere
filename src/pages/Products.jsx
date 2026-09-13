import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = [...new Set(products.map((product) => product.category))];

  // URL irraa category fudhadhu
  const categoryFromURL = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromURL);
  const [sort, setSort] = useState("default");

  // Category filter
  function handleCategoryChange(event) {
    const selectedCategory = event.target.value;

    setCategory(selectedCategory);

    if (selectedCategory === "all") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: selectedCategory,
      });
    }
  }

  // Search + Category
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Sorting
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main>
      <h1>Our Products 🛍️</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="🔎 Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {/* Category */}
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All Categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {/* Sort */}
      <select value={sort} onChange={(event) => setSort(event.target.value)}>
        <option value="default">Sort By</option>

        <option value="low">Price: Low to High</option>

        <option value="high">Price: High to Low</option>
      </select>

      {/* Products */}
      <section>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found ❌</p>
        )}
      </section>
    </main>
  );
}

export default Products;

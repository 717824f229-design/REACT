import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import Reviews from "../components/Reviews";
import SimilarRestaurants from "../components/SimilarRestaurants";
import Footer from "../components/Footer";
import products from "../data/products";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Hero />

      <CategoryFilter
        setCategory={setCategory}
      />

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <Reviews />

      <SimilarRestaurants />

      <Footer />
    </>
  );
}

export default Home;
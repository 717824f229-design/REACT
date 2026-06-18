import Navbar from "../components/Navbar.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Footer from "../components/Footer.jsx";
import products from "../data/products.js";

function Products() {
  return (
    <>
      <Navbar />

      <h1 className="page-title">All Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Products;
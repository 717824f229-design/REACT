function CategoryFilter({ setCategory }) {
  return (
    <div className="categories">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Burger")}>Burger</button>
      <button onClick={() => setCategory("Fries")}>Fries</button>
      <button onClick={() => setCategory("Drink")}>Drink</button>
    </div>
  );
}

export default CategoryFilter;
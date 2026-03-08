import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Home.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // NEW: search/filter/sort state
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOption, setSortOption] = useState("none");

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, i) => i !== indexToRemove));
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  // NEW: build category dropdown list
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // NEW: apply Search + Filter + Sort together
  const displayedProducts = products
    .filter((p) => {
      // FILTER category
      const categoryMatch =
        categoryFilter === "All" || p.category === categoryFilter;

      // SEARCH (name + category)
      const text = searchText.toLowerCase();
      const searchMatch =
        p.name.toLowerCase().includes(text) ||
        p.category.toLowerCase().includes(text);

      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortOption === "priceLow") return Number(a.price) - Number(b.price);
      if (sortOption === "priceHigh") return Number(b.price) - Number(a.price);
      if (sortOption === "nameAZ") return a.name.localeCompare(b.name);
      if (sortOption === "nameZA") return b.name.localeCompare(a.name);
      return 0; // none
    });

  return (
    <div className="page">
      <h1>Shop</h1>
      <p>Browse fabrics, threads, needles & tools.</p>

      {/* NEW: Controls */}
      <div className="controlsRow">
        <input
          className="input"
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          className="select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="none">Sort: None</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="nameAZ">Name: A → Z</option>
          <option value="nameZA">Name: Z → A</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <div className="cardContainer">
        {displayedProducts.map((p) => (
          <div className="card" key={p._id}>
            <h3>{p.name}</h3>
            <p>{p.category}</p>
            <p>€{Number(p.price).toFixed(2)}</p>
            <p>Stock: {p.stock}</p>

            <button className="btn" onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}

        {displayedProducts.length === 0 && <p>No products match.</p>}
      </div>

      {/* CART PREVIEW */}
      <div className="cartBox">
        <h2>Cart Preview</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cartList">
              {cart.map((item, index) => (
                <li key={index} className="cartItem">
                  {item.name} - €{Number(item.price).toFixed(2)}{" "}
                  <button
                    className="btnSmall"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <p className="total">Total: €{total.toFixed(2)}</p>
          </>
        )}
      </div>
    </div>
  );
}
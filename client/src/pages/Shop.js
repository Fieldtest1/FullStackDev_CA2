import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./Home.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // search/filter/sort state
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");

  // load products once
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // categories for dropdown
  const categories = useMemo(() => {
    const cats = products.map((p) => p.category).filter(Boolean);
    return ["All", ...Array.from(new Set(cats))];
  }, [products]);

  // search + filter + sort together
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // filter category
    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    // search name (and category too)
    if (searchText.trim() !== "") {
      const q = searchText.toLowerCase();
      list = list.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.category && p.category.toLowerCase().includes(q))
      );
    }

    // sort
    if (sortBy === "name-asc") list.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    if (sortBy === "name-desc") list.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
    if (sortBy === "price-asc") list.sort((a, b) => Number(a.price) - Number(b.price));
    if (sortBy === "price-desc") list.sort((a, b) => Number(b.price) - Number(a.price));

    return list;
  }, [products, category, searchText, sortBy]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, i) => i !== indexToRemove));
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="page">
      <h1>Shop</h1>
      <p>Browse fabrics, threads, needles & tools.</p>

      {/* SEARCH / FILTER / SORT */}
      <div className="controlsRow">
        <input
          className="input"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select className="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name-asc">Name (A → Z)</option>
          <option value="name-desc">Name (Z → A)</option>
          <option value="price-asc">Price (Low → High)</option>
          <option value="price-desc">Price (High → Low)</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <div className="cardContainer">
        {filteredProducts.map((p) => (
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

        {filteredProducts.length === 0 && <p>No products match your search.</p>}
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
                  <button className="btnSmall" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <p className="total">Total: €{total.toFixed(2)}</p>

            <button className="btn">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}
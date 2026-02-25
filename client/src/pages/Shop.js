import React, { useState } from "react";
import "./Home.css";

export default function Shop() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Cotton Fabric Bundle",
      category: "Fabric",
      price: 12.99,
      img: "/images/fabric.jpg",
    },
    {
      id: 2,
      name: "Sewing Thread Set",
      category: "Thread",
      price: 6.99,
      img: "/images/thread.jpg",
    },
    {
      id: 3,
      name: "Starter Needle Pack",
      category: "Needles",
      price: 3.5,
      img: "/images/needles.jpg",
    },
    {
      id: 4,
      name: "Measuring Tape",
      category: "Tools",
      price: 2.99,
      img: "/images/tape.jpg",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    const newCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page">
      <h1>Shop</h1>
      <p>Browse fabrics, threads, needles & tools.</p>

      <div className="cardContainer">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img className="cardImg" src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.category}</p>
            <p>€{p.price.toFixed(2)}</p>

            <button className="btn" onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cartBox">
        <h2>Cart Preview</h2>

        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.length > 0 && (
          <>
            <ul className="cartList">
              {cart.map((item, index) => (
                <li key={index} className="cartItem">
                  <span>
                    {item.name} - €{item.price.toFixed(2)}
                  </span>
                  <button className="btnSmall" onClick={() => removeFromCart(index)}>
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
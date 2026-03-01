import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const p1 = {
    name: "Cotton Fabric Bundle",
    category: "Fabric",
    price: 24.99,
    stock: "In Stock",
    img: "/images/fabric.jpg",
  };

  const p2 = {
    name: "Sewing Thread Set",
    category: "Thread",
    price: 12.99,
    stock: "In Stock",
    img: "/images/thread.jpg",
  };

  const p3 = {
    name: "Starter Needle Pack",
    category: "Needles",
    price: 7.99,
    stock: "Low Stock",
    img: "/images/needles.jpg",
  };

  return (
    <div className="home">

      <section className="hero">
        <div className="heroText">
          <h1>
            Sewing Supplies <br />
            <span className="heroSub">Materials, Tools & Kits</span>
          </h1>

          <p className="heroP">
            Everything you need for sewing and crafting.
          </p>

          <Link to="/shop">
            <button className="primaryBtn">Shop Now</button>
          </Link>
        </div>

        <div className="heroImageBox">
          <img
            className="heroImage"
            src="/images/hero.jpg"
            alt="Sewing supplies banner"
          />
        </div>
      </section>

      <section className="badges">
        <div className="badge">Fast Delivery</div>
        <div className="badge">Secure Payments</div>
        <div className="badge">Quality Materials</div>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>

        <table className="productTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {[p1, p2, p3].map((p, index) => (
              <tr key={index}>
                <td><img className="tableImg" src={p.img} alt={p.name} /></td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>€{p.price}</td>
                <td>{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="footer">
        <p>© 2026 Sewing Supplies | About | Privacy | Contact</p>
      </footer>
    </div>
  );
}
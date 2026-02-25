import React from "react";
import "./Home.css";

export default function Home() {
  // hardcoded featured products (simple, no loops)
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
            Everything you need for sewing and crafting — fabric, thread, needles,
            patterns and more.
          </p>

          <button className="primaryBtn">Shop Now</button>
        </div>

        <div className="heroImageBox">
          <img
            className="heroImage"
            src="/images/hero.jpg"
            alt="Sewing supplies banner"
          />
        </div>
      </section>

      {/* QUICK INFO BOXES */}
      <section className="badges">
        <div className="badge">Fast Delivery</div>
        <div className="badge">Secure Payments</div>
        <div className="badge">Quality Materials</div>
      </section>

      {/* SEARCH BAR (UI only) */}
      <section className="searchBar">
        <input
          className="searchInput"
          type="text"
          placeholder="Search products (UI only for now)"
        />
      </section>

      {/* FEATURED PRODUCTS TABLE */}
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
            <tr>
              <td>
                <img className="tableImg" src={p1.img} alt={p1.name} />
              </td>
              <td>{p1.name}</td>
              <td>{p1.category}</td>
              <td>€{p1.price}</td>
              <td>{p1.stock}</td>
            </tr>

            <tr>
              <td>
                <img className="tableImg" src={p2.img} alt={p2.name} />
              </td>
              <td>{p2.name}</td>
              <td>{p2.category}</td>
              <td>€{p2.price}</td>
              <td>{p2.stock}</td>
            </tr>

            <tr>
              <td>
                <img className="tableImg" src={p3.img} alt={p3.name} />
              </td>
              <td>{p3.name}</td>
              <td>{p3.category}</td>
              <td>€{p3.price}</td>
              <td>{p3.stock}</td>
            </tr>
          </tbody>
        </table>

      </section>
      <section>
  <div className="cardContainer">
    <div className="card">
      <img src="/images/fabric.jpg" alt="Fabric" />
      <h3>Cotton Fabric</h3>
      <p>Good quality cotton material.</p>
      <p>€12.99</p>
    </div>

    <div className="card">
      <img src="/images/fabric.jpg" alt="Fabric" />
      <h3>Cotton Fabric</h3>
      <p>Good quality cotton material.</p>
      <p>€12.99</p>
    </div>

    <div className="card">
      <img src="/images/fabric.jpg" alt="Fabric" />npm start
      <h3>Cotton Fabric</h3>
      <p>Good quality cotton material.</p>
      <p>€12.99</p>
    </div>
      <div className="card">
      <img src="/images/fabric.jpg" alt="Fabric" />
      <h3>Cotton Fabric</h3>
      <p>Good quality cotton material.</p>
      <p>€12.99</p>
    </div>
      <div className="card">
      <img src="/images/fabric.jpg" alt="Fabric" />
      <h3>Cotton Fabric</h3>
      <p>Good quality cotton material.</p>
      <p>€12.99</p>
    </div>
  </div>
</section>

  

      {/* FOOTER */}
      <footer className="footer">
        <p>About Us | Privacy Policy | Contact Us</p>
      </footer>
    </div>
  );
}
import React, { useState } from "react";
import "./Home.css";

export default function Admin() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Cotton Fabric Bundle",
      category: "Fabric",
      price: 12.99,
      stock: 10,
    },
    {
      id: 2,
      name: "Sewing Thread Set",
      category: "Thread",
      price: 6.99,
      stock: 25,
    },
    {
      id: 3,
      name: "Starter Needle Pack",
      category: "Needles",
      price: 3.5,
      stock: 8,
    },
  ]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Fabric");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [editingId, setEditingId] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleStockChange = (e) => setStock(e.target.value);

  const clearForm = () => {
    setName("");
    setCategory("Fabric");
    setPrice("");
    setStock("");
    setEditingId(null);
  };

  const addProduct = () => {
    if (name.trim() === "" || price === "" || stock === "") {
      alert("Please fill in name, price and stock.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      category,
      price: Number(price),
      stock: Number(stock),
    };

    setProducts([...products, newProduct]);
    clearForm();
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setName(p.name);
    setCategory(p.category);
    setPrice(String(p.price));
    setStock(String(p.stock));
  };

  const saveEdit = () => {
    if (name.trim() === "" || price === "" || stock === "") {
      alert("Please fill in name, price and stock.");
      return;
    }

    const updated = products.map((p) => {
      if (p.id === editingId) {
        return {
          ...p,
          name: name.trim(),
          category,
          price: Number(price),
          stock: Number(stock),
        };
      }
      return p;
    });

    setProducts(updated);
    clearForm();
  };

  const deleteProduct = (id) => {
    const ok = window.confirm("Delete this product?");
    if (!ok) return;

    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
  };

  return (
    <div className="page">
      <h1>Admin</h1>
      <p>Add / Edit / Delete products (UI only for now).</p>

      <div className="adminBox">
        <h2>{editingId ? "Edit Product" : "Add Product"}</h2>

        <div className="formRow">
          <label className="formLabel">Name</label>
          <input
            className="input"
            value={name}
            onChange={handleNameChange}
            placeholder="e.g. Cotton Fabric Bundle"
          />
        </div>

        <div className="formRow">
          <label className="formLabel">Category</label>
          <select className="input" value={category} onChange={handleCategoryChange}>
            <option>Fabric</option>
            <option>Thread</option>
            <option>Needles</option>
            <option>Tools</option>
            <option>Kits</option>
          </select>
        </div>

        <div className="formRow">
          <label className="formLabel">Price (€)</label>
          <input
            className="input"
            type="number"
            step="0.01"
            value={price}
            onChange={handlePriceChange}
            placeholder="e.g. 12.99"
          />
        </div>

        <div className="formRow">
          <label className="formLabel">Stock</label>
          <input
            className="input"
            type="number"
            value={stock}
            onChange={handleStockChange}
            placeholder="e.g. 10"
          />
        </div>

        <div className="btnRow">
          {!editingId && (
            <button className="btn" onClick={addProduct}>
              Add Product
            </button>
          )}

          {editingId && (
            <>
              <button className="btn" onClick={saveEdit}>
                Save
              </button>
              <button className="btnSmall" onClick={clearForm}>
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      <div className="adminBox">
        <h2>Products ({products.length})</h2>

        {products.length === 0 && <p>No products yet.</p>}

        {products.length > 0 && (
          <table className="adminTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>€{p.price.toFixed(2)}</td>
                  <td>{p.stock}</td>
                  <td>
                    <button className="btnSmall" onClick={() => startEdit(p)}>
                      Edit
                    </button>{" "}
                    <button className="btnSmall" onClick={() => deleteProduct(p.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
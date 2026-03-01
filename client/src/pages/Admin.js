import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Admin() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Fabric");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [editingId, setEditingId] = useState(null);

  // GET products
  useEffect(() => {
    axios.get("http://localhost:4000/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const clearForm = () => {
    setName("");
    setCategory("Fabric");
    setPrice("");
    setStock("");
    setEditingId(null);
  };

  const addProduct = () => {
    const newProduct = {
      name: name,
      category: category,
      price: Number(price),
      stock: Number(stock)
    };

    axios.post("http://localhost:4000/products", newProduct)
      .then(() => {
        window.location.reload(); // simple way for now
      });
  };

  const updateProduct = () => {
    const updatedProduct = {
      name: name,
      category: category,
      price: Number(price),
      stock: Number(stock)
    };

    axios.put(`http://localhost:4000/products/${editingId}`, updatedProduct)
      .then(() => {
        window.location.reload();
      });
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`)
      .then(() => {
        window.location.reload();
      });
  };

  const editProduct = (product) => {
    setEditingId(product._id);
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setStock(product.stock);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Page</h1>

      <h2>{editingId ? "Edit Product" : "Add Product"}</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Fabric">Fabric</option>
        <option value="Thread">Thread</option>
        <option value="Needles">Needles</option>
      </select>

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      {editingId ? (
        <button onClick={updateProduct}>Update</button>
      ) : (
        <button onClick={addProduct}>Add</button>
      )}

      <button onClick={clearForm}>Clear</button>

      <hr />

      <h2>Products</h2>

      {products.map(product => (
        <div key={product._id}>
          {product.name} | {product.category} | €{product.price} | Stock: {product.stock}

          <button onClick={() => editProduct(product)}>Edit</button>
          <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
      ))}

    </div>
  );
}
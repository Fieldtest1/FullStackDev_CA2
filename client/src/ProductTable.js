import ProductTableRow from "./ProductTablerow";

export default function ProductTable({ products, deleteProduct }) {
  return (
    <div>
      <h3>Product List ({products.length} products)</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Energy Rating</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <ProductTableRow
              key={product._id}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))}s
        </tbody>
      </table>

      {products.length === 0 && (
        <p>No products in the system.</p>
      )}
    </div>
  );
}
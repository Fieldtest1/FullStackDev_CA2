export default function ProductTableRow({ product, deleteProduct }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.energyRating}</td>
      <td>€{product.price}</td>
      <td>{product.stock}</td>
      <td>
        <button onClick={() => deleteProduct(product._id)}>Delete</button>
      </td>
    </tr>
  );
}
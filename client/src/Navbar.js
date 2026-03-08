import { Link } from "react-router-dom";
import "./css/Home.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="navInner">
        <div className="logo">Site Name</div>

        <div className="navLinks">
          <Link to="/shop">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </div>
  );
}
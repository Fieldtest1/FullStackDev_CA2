import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="site-title">
        Site Name
      </NavLink>

      <ul>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
}
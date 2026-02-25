import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./pages/Home.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
       <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
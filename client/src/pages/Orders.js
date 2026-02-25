import React, { useState } from "react";
import "./Home.css";

export default function Orders() {
  const [orders] = useState([
    {
      id: 1001,
      date: "02-12-2025",
      customer: "John",
      status: "Processing",
      total: 22.48,
    },
    {
      id: 1002,
      date: "23-03-2026",
      customer: "Sarah",
      status: "Delivered",
      total: 39.99,
    },
    {
      id: 1003,
      date: "22-02-2026",
      customer: "Alex",
      status: "Cancelled",
      total: 12.99,
    },
  ]);

  return (
    <div className="page">
      <h1>Orders</h1>
      <p>Here are recent orders (UI only for now).</p>

      <div className="ordersBox">
        <h2>Order List</h2>

        {orders.length === 0 && <p>No orders yet.</p>}

        {orders.length > 0 && (
          <table className="ordersTable">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>#{o.id}</td>
                  <td>{o.date}</td>
                  <td>{o.customer}</td>
                  <td>
                    <span className={"status " + o.status.toLowerCase()}>
                      {o.status}
                    </span>
                  </td>
                  <td>€{o.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
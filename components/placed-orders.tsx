// pages/placed-orders.tsx

import { Order, PlacedOrdersResponse } from "@/types";
import React from "react";
import Container from "./ui/container";
// Create a layout component if needed

interface PlacedOrderProps {
  ordersData: PlacedOrdersResponse;
}

const PlacedOrdersPage: React.FC<PlacedOrderProps> = ({ ordersData }) => {
  const placedOrders: PlacedOrdersResponse = ordersData;

  return (
    <Container>
      <div className="py-8 px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Placed Orders</h1>
        <ul>
          {placedOrders.data.map((order) => (
            <li key={order.id} className="border p-4 mb-4 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-2">
                {order.attributes.name}
              </h2>
              <p className="mb-2">Fabric: {order.attributes.fabric}</p>
              <p className="mb-2">Color: {order.attributes.color}</p>
              <p className="mb-2">
                Paid: {order.attributes.paid ? "Yes" : "No"}
              </p>
              <p className="mb-2">Payment: {order.attributes.payment}</p>
              <p className="mb-2">Mobile: {order.attributes.mobile}</p>
              <p className="mb-2">
                Address: {order.attributes.address.data.attributes.address}
              </p>
              <p className="mb-2">Products:</p>
              <ul className="p-2 pl-4 border-[1px] border-zinc-700 rounded-md shadow-md">
                {order.attributes.products.data.map((product) => (
                  <li key={product.id}>
                    {product.attributes.name} - ₹{product.attributes.price}
                  </li>
                ))}
              </ul>
              <p className="mt-2">
                Total Amount Paid: ₹{calculateTotal(order)}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Order Date:{" "}
                {new Date(order.attributes.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

const calculateTotal = (order: Order) => {
  const products = order.attributes.products.data;
  return products.reduce(
    (total, product) => total + product.attributes.price,
    0
  );
};

export default PlacedOrdersPage;

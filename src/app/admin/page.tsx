"use client"
import React, { useState, useEffect } from 'react';

interface Order {
  id: number;
  items: Array<{
    dishName: string;
    quantity: number;
    price: number;
  }>;
  // Add other order properties if needed
}

const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState<string | null>(null); // Store any errors

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await fetch('http://192.168.1.103:8081/api/GetOrders', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        
        const data = await response.json();
        console.log('Fetched orders:', data); // Log the fetched data
        setOrders(Array.isArray(data) ? data : []); // Ensure data is an array before setting orders
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError(error instanceof Error ? error.message : 'An error occurred while fetching orders');
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-orders">
      <h1>Orders</h1>
      {isLoading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : orders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Dish Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                {order.items.map((item, index) => (
                  <React.Fragment key={index}>
                    <td>{item.dishName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </React.Fragment>
                ))}
                <td>
                  {/* Calculate total price for each order */}
                  {order.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default AdminOrders;

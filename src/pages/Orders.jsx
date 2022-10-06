import axios from "axios";
import React, { useEffect, useState } from "react";
// Components
import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchFData() {
      try {
        const { data } = await axios.get(
          "https://613f7bf2e9d92a0017e17739.mockapi.io/orders"
        );
        const oneItem = data.map((item) => item[0]);
        setOrders(oneItem);
      } catch (error) {
        console.log("Что-то пошло не так!");
      }
    }
    fetchFData();
  }, []);

  return (
    <div className="content">
      <div className="seachBlock">
        <h1>Мои заказы</h1>
      </div>
      <div className="camers">
        {orders.map((item) => (
          <Card
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;

import Card from "../components/Card";
import React from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    try {
      async function fetchOrders() {
        const { data } = await axios.get(
          "https://613f7bf2e9d92a0017e17739.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
      }
      fetchOrders();
    } catch (error) {
      alert("Ошибка при щапросе заказов");
    }
  }, []);

  return (
    <div className="content">
      <div className="search">
        <h1>Мои заказы</h1>
      </div>
      <div className="photocamers">
        {orders.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

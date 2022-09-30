import React, { useState } from "react";
import axios from "axios";
// Components
import Info from "../Info";
// Css
import styles from "./Drawer.module.scss";

function Drawer({ onClose, cartItems, onRemoveItem, setCartItems }) {
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const onCLickOrder = async () => {
    try {
      const { data } = await axios.post(
        `https://613f7bf2e9d92a0017e17739.mockapi.io/orders`,
        cartItems
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);
      axios.delete("https://613f7bf2e9d92a0017e17739.mockapi.io/cart");
    } catch (error) {
      alert("Не удалось создать заказ!");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            onClick={onClose}
            className={styles.cancel}
            width={28}
            height={28}
            src="/img/svg/cancel.svg"
            alt="Close"
          />
        </h2>

        {cartItems.length === 0 ? (
          <Info
            onClose={onClose}
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской службе`
                : "Добавьте хотя бы одну пару кроссовок чтобы сделать заказ"
            }
            image={
              isOrderCompleted ? "/img/png/order.jpg" : "/img/png/cartEmpty.png"
            }
          />
        ) : (
          <>
            <div className={styles.products}>
              {cartItems.map((obj) => (
                <div key={obj.id} className={styles.item}>
                  <img
                    className={styles.jpg}
                    width={60}
                    height={60}
                    src={obj.imageUrl}
                    alt="Photocamera"
                  />
                  <div className={styles.discription}>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemoveItem(obj.id)}
                    className={styles.cancel}
                    width={28}
                    height={28}
                    src="/img/svg/cancel.svg"
                    alt="Close"
                  />
                </div>
              ))}
            </div>

            <div className={styles.items}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div className={styles.dashed}></div>
                  <b>21 461 р.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1 168 р.</b>
                </li>
              </ul>
              <button onClick={onCLickOrder}>
                Оформить заказ <img src="/img/svg/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Drawer;

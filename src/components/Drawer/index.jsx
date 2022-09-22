import React from "react";
// Css
import styles from "./Drawer.module.scss";

function Drawer({ onClose, cartItems, onRemoveItem }) {
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

        <div className={styles.products}>
          {cartItems.map((obj) => (
            <div className={styles.item}>
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
          <button className={styles.button}>
            Оформить заказ <img src="/img/svg/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

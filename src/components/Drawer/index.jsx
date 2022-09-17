import React from "react";
// Css
import styles from "./Drawer.module.scss";

function Drawer({ onClose }) {
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
          <div className={styles.item}>
            <img
              className={styles.jpg}
              width={60}
              height={60}
              src="/img/photocamers/Canon R.jpg"
              alt="Canon R"
            />
            <div className={styles.discription}>
              <p>Беззеркальная фотокамера Canon R</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={styles.cancel}
              width={28}
              height={28}
              src="/img/svg/cancel.svg"
              alt="Close"
            />
          </div>
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

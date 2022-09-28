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

        {cartItems.length === 0 ? (
          <div className={styles.cartEmpty}>
            <img
              width={120}
              height={120}
              src="/img/png/cartEmpty.png"
              alt="CartEmpty"
            />
            <h2>Корзина пуста</h2>
            <p>Добавьте хотя бы одну пару кроссовок чтобы сделать заказ</p>
            <button onClick={onClose}>
              <img src="/img/svg/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
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
              <button>
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

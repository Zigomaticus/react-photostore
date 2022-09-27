import React from "react";
// Css
import styles from "./Header.module.scss";

function Header({ onClickCard }) {
  return (
    <header>
      <div className={styles.left}>
        <img width={40} height={40} src="/img/png/logo.png" alt="Logo" />
        <div>
          <h3>React photostore</h3>
          <p>Магазин лучших фотоаппаратов</p>
        </div>
      </div>
      <div className={styles.right}>
        <ul>
          <li className={styles.cart} onClick={onClickCard}>
            <img width={18} height={18} src="/img/svg/cart.svg" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img
              className={styles.favorite}
              width={18}
              height={18}
              src="/img/svg/heart.svg"
              alt="Фавориты"
            />
          </li>
          <li>
            <img
              width={18}
              height={18}
              src="/img/svg/user.svg"
              alt="Пользователь"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
// Css
import styles from "./Header.module.scss";

function Header() {
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
          <li>
            <img width={18} height={18} src="/img/svg/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/svg/user.svg" alt="User" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

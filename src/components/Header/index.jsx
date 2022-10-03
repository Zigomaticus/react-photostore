import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
// Css
import styles from "./Header.module.scss";

function Header({ onClickCard }) {
  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => +obj.price + +sum, 0);

  return (
    <header>
      <Link to="/">
        <div className={styles.left}>
          <img width={40} height={40} src="/img/png/logo.png" alt="Logo" />

          <div>
            <h3>React photostore</h3>
            <p>Магазин лучших фотоаппаратов</p>
          </div>
        </div>
      </Link>
      <div className={styles.right}>
        <ul>
          <li className={styles.cart} onClick={onClickCard}>
            <img width={18} height={18} src="/img/svg/cart.svg" alt="Корзина" />
            <span>{totalPrice} руб.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img
                className={styles.favorite}
                width={18}
                height={18}
                src="/img/svg/heart.svg"
                alt="Фавориты"
              />
            </Link>
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

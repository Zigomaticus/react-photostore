import { Link } from "react-router-dom";
import React from "react";
import { AppContext } from "../App";

function Header({ onClickCart }) {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce(
    (sum, obj) => Number(obj.price) + Number(sum),
    0
  );

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3>React photostore</h3>
            <p>Магазин лучших фотоаппаратов</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={onClickCart}>
          <img width={18} height={18} src="/img/svg/cart.svg" alt="cart" />
          <span>{totalPrice} р.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={18} height={18} src="/img/svg/heart.svg" alt="heart" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="/img/svg/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

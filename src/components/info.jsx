import React from "react";
import { AppContext } from "../App";

export const Info = ({ image, title, discription }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty">
      <img width={120} height={120} src={image} alt="cart empty" />
      <h2>{title}</h2>
      <p>{discription}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/img/svg/arrow.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;

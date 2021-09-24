import React from "react";
import Info from "./info";
import { AppContext } from "../App";
import axios from "axios";

function Drawer({ onClose, onRemove, items = [] }) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const price = cartItems.reduce(
    (sum, obj) => Number(obj.price) + Number(sum),
    0
  );
  const discount = Math.round((price / 100) * 5);
  const totalPrice = price - discount;

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(
        "https://613f7bf2e9d92a0017e17739.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert("Не удалось создать заказ");
    }
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="cartWord">
          Корзина
          <img
            onClick={onClose}
            className="cartItemCancel"
            width="30"
            height="30"
            src="/img/svg/cancel.svg"
            alt="cancel"
          />
        </h2>

        {items.length > 0 ? (
          <React.Fragment>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <img
                    className="cartItemPhoto"
                    width="70"
                    height="70"
                    src={obj.imageUrl}
                    alt="Nikon D500"
                  />
                  <div className="cartItemInfo">
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="cartItemCancel"
                    width="30"
                    height="30"
                    src="/img/svg/cancel.svg"
                    alt="cancel"
                  />
                </div>
              ))}
            </div>
            <ul className="cartTotal">
              <li className="cartTotalBlock">
                <span>Сумма:</span>
                <div></div>
                <b>{price} руб.</b>
              </li>
              <li className="cartTotalBlock">
                <span>Скидка 5%:</span>
                <div></div>
                <b>{discount} руб.</b>
              </li>
              <li className="cartTotalBlock">
                <span>Итого:</span>
                <div></div>
                <b>{totalPrice} руб.</b>
              </li>
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ
                <img src="/img/svg/arrow.svg" alt="arrow" />
              </button>
            </ul>
          </React.Fragment>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            discription={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавте хотя бы один фотоапарат, чтобы сделать заказ"
            }
            image={isOrderComplete ? "/img/order.jpg" : "/img/cartEmpty.png"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;

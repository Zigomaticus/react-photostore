import React from "react";

function Drawer({ onClose, onRemove, items = [] }) {
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
                <div className="cartItem">
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
                <span>Итого:</span>
                <div></div>
                <b>432 942 руб.</b>
              </li>
              <li className="cartTotalBlock">
                <span>Налог 5%:</span>
                <div></div>
                <b>20 186 руб.</b>
              </li>
              <button className="greenButton">
                Оформить заказ
                <img src="/img/svg/arrow.svg" alt="arrow" />
              </button>
            </ul>
          </React.Fragment>
        ) : (
          <div className="cartEmpty">
            <img
              width={120}
              height={120}
              src="/img/cartEmpty.png"
              alt="cart empty"
            />
            <h2>Корзина пустая</h2>
            <p>Добавте хотя бы один фотоапарат, чтобы сделать заказ</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/svg/arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;

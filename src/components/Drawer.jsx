import React from "react";

function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            className="cancelItem"
            width={28}
            height={28}
            src="/img/svg/cancel.svg"
            alt="Close"
          />
        </h2>

        <div className="products">
          <div className="cartItem">
            <img
              className="itemJpg"
              width={60}
              height={60}
              src="/img/photocamers/Canon R.jpg"
              alt="Canon R"
            />
            <div className="discription">
              <p>Беззеркальная фотокамера Canon R</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="cancelItem"
              width={28}
              height={28}
              src="/img/svg/cancel.svg"
              alt="Close"
            />
          </div>
        </div>

        <div className="items">
          <ul>
            <li>
              <span>Итого:</span>
              <div className="dashed"></div>
              <b>21 461 р.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 168 р.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/svg/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

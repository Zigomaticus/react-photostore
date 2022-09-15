import React from "react";

function Card({props}) {
  return (
    <div className="card">
      <div className="favorite">
        <img
          width={31}
          height={31}
          src="/img/svg/heartWhite.svg"
          alt="Not favorite"
        />
      </div>
      <img
        width={133}
        height={112}
        src={props.imageUrl}
        alt="Canon R"
      />
      <h5>{props.title}</h5>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Цена: </span>
          <b>{props.price} руб.</b>
        </div>
        <button>
          <img width={11} height={11} src="/img/svg/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;

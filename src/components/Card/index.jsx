import React, { useState } from "react";
// Css
import styles from "./Card.module.scss";

function Card({ title, imageUrl, price, onClickPlus, onClickFavorite }) {
  const [isAdded, setIsAdded] = useState(false);

  const handlePlus = () => {
    onClickPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          width={31}
          height={31}
          src="/img/svg/heartWhite.svg"
          alt="Not favorite"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Photocamera" />
      <h5>{title}</h5>
      <div className={styles.bottom}>
        <div className={styles.price}>
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <button>
          <img
            onClick={handlePlus}
            width={32}
            height={32}
            src={isAdded ? "/img/svg/plusChecked.svg" : "/img/svg/plus.svg"}
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;

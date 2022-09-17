import React, { useState } from "react";
// Css
import styles from "./Card.module.scss";

function Card({ props, onClickPlus, onClickFavorite }) {

  const [isAdded, setIsAdded] = useState(false)

  const handlePlus = () => {
    setIsAdded(!isAdded)
  }

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
      <img width={133} height={112} src={props.imageUrl} alt="Photocamera" />
      <h5>{props.title}</h5>
      <div className={styles.bottom}>
        <div className={styles.price}>
          <span>Цена: </span>
          <b>{props.price} руб.</b>
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

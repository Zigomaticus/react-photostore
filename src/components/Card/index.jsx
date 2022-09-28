import React, { useState } from "react";
// Css
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  imageUrl,
  price,
  onClickPlus,
  onFavorite,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const handlePlus = () => {
    onClickPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const handleFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={handleFavorite}
          width={31}
          height={31}
          src={isFavorite ? "/img/svg/heartRed.svg" : "/img/svg/heartWhite.svg"}
          alt="Добавить в избранное"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Photocamera" />
      <h5>{title}</h5>
      <div className={styles.bottom}>
        <div className={styles.price}>
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <button className={styles.button}>
          <img
            onClick={handlePlus}
            width={32}
            height={32}
            src={isAdded ? "/img/svg/plusChecked.svg" : "/img/svg/plus.svg"}
            alt="Добавить товар"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;

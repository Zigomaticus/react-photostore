import React from "react";
import styles from "./Card.module.scss";
import { AppContext } from "../../App";

function Card({
  id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  favorited = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const dataItem = { id, title, price, imageUrl };

  const onClickFavorite = () => {
    onFavorite(dataItem);
    setIsFavorite(!isFavorite);
  };

  const onClickPlus = () => {
    onPlus(dataItem);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        {onFavorite && (
          <img
            onClick={onClickFavorite}
            src={
              isFavorite ? "/img/svg/heartRed.svg" : "/img/svg/heartWhite.svg"
            }
            alt="white heart"
          />
        )}
      </div>
      <img width={133} height={112} src={imageUrl} alt="Nikon D500" />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button>
          {onPlus && (
            <img
              onClick={onClickPlus}
              src={
                isItemAdded(id)
                  ? "/img/svg/plus-checked.svg"
                  : "/img/svg/plus.svg"
              }
              alt="plus"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;

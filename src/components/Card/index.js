import React from 'react'
import styles from "./Card.module.scss";

function Card({ id, title, price, imageUrl, onFavorite, onPlus, favirited = false}) {
  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(favirited)

  const onClickFavorite = () => {
    onFavorite({id, title, price, imageUrl})
    setIsFavorite(!isFavorite)
  }

  const onClickPlus = () => {
    onPlus({id, title, price, imageUrl})
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/svg/heartWhite.svg" : "/img/svg/heartRed.svg"}
          alt="white heart"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Nikon D500" />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button>
          <img
            onClick={onClickPlus}
            src={isAdded ? "/img/svg/plus-checked.svg" :  "/img/svg/plus.svg"} 
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;

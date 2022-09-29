import React, { useState } from "react";
import ContentLoader from "react-content-loader";

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
  added = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
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
      <ContentLoader
        speed={2}
        width={220}
        height={260}
        viewBox="0 0 220 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="160" rx="10" ry="10" width="170" height="28" />
        <rect x="0" y="220" rx="10" ry="10" width="110" height="38" />
        <rect x="130" y="220" rx="10" ry="10" width="40" height="40" />
        <rect x="0" y="0" rx="10" ry="10" width="170" height="150" />
      </ContentLoader>
      {/* <div className={styles.favorite}>
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
      </div> */}
    </div>
  );
}

export default Card;

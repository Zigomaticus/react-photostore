import React from "react";
// Css
import styles from "./Info.module.scss";

function Info({onClose, title, description, image}) {
  return (
    <div className={styles.cartEmpty}>
      <img
        width={120}
        height={120}
        src={image}
        alt="CartEmpty"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClose}>
        <img src="/img/svg/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
}

export default Info;

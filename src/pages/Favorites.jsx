import React from "react";
// Components
import Card from "../components/Card";

function Favorites({ favorites }) {
  return (
    <div className="content">
      <div className="seachBlock">
        <h1>Мои избранные</h1>
      </div>
      <div className="camers">
        {favorites.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={true}
            // onClickPlus={(obj) => onAddToCard(obj)}
            // onFavorite={(obj) => onAddToFavorite(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;

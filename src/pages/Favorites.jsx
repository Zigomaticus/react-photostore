import React from "react";
// Components
import Card from "../components/Card";

function Favorites({ favorites, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="seachBlock">
        <h1>Мои избранные</h1>
      </div>
      <div className="camers">
        {favorites.map((item) => (
          <Card
            key={item.id}
            favorited={true}
            onFavorite={(obj) => onAddToFavorite(obj)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;

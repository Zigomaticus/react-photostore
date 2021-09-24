import Card from "../components/Card";
import { AppContext } from "../App";
import React from "react";

function Favorites({ onAddToFavorite }) {
  const { favorites } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="search">
        <h1>Мои фавориты</h1>
      </div>
      <div className="photocamers">
        {favorites.map((item) => (
          <Card
            key={item.id}
            {...item}
            onFavorite={(obj) => onAddToFavorite(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;

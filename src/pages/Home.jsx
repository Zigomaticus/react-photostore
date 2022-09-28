import React from "react";
// Components
import Card from "../components/Card";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToCard,
  onAddToFavorite,
}) {
  return (
    <div className="content">
      <div className="seachBlock">
        {searchValue ? `Поиск по: ${searchValue} ` : <h1>Все фотоаппараты</h1>}
        <div className="search">
          <img width={18} height={18} src="/img/svg/search.svg" alt="Search" />
          <input
            placeholder="Поиск..."
            value={searchValue}
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <div className="camers">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickPlus={(obj) => onAddToCard(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;

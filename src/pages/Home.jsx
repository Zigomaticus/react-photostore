import Card from "../components/Card";

function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCard,
  onAddToFavorite,
}) {
  return (
    <div className="content">
      <div className="search">
        <h1>
          {searchValue
            ? `Поиск по запросу: '${searchValue}'`
            : "Все фотоаппараты"}
        </h1>
        <div className="search-block">
          <img src="/img/svg/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="searchCancel"
              width="12"
              height="12"
              src="/img/svg/close.svg"
              alt="cancel"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="photocamers">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item) => (
            <Card
              key={item.id}
              {...item}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCard(obj)}
              //added={isItemAdded(item.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;

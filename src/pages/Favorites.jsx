import Card from '../components/Card'

function Favorites({items, onAddToFavorite}) {
  return (
    <div className="content">
      <div className="search">
        <h1>My favorites</h1>
      </div>
      <div className="photocamers">
        {items
          .map((item) => (
            <Card
              key={item.id}
              {...item}
              onFavorite={(obj) => onAddToFavorite(obj)}
              // onPlus={(obj) => onAddToCard(obj)}
            />
          ))}
      </div>
    </div>
  );
}

//(obj) => onAddToFavorite(obj)

export default Favorites;

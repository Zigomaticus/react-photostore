import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

// const arr = [
//   {
//     title: "Беззеркальная фотокамера Canon R",
//     price: 150999,
//     imageUrl: "/img/photocamers/Canon R.jpg",
//   },
//   {
//     title: "Беззеркальная фотокамера Nikon Z7",
//     price: 167999,
//     imageUrl: "/img/photocamers/Nikon Z7.jpg",
//   },
//   {
//     title: "Беззеркальная фотокамера Sony 7M3K",
//     price: 190000,
//     imageUrl: "/img/photocamers/Sony 7M3K.jpg",
//   },
//   {
//     title: "Зеркальная фотокамера Nikon D500",
//     price: 124999,
//     imageUrl: "/img/photocamers/Nikon D500.jpg",
//   },
//   {
//     title: "Беззеркальная фотокамера Canon R6",
//     price: 111999,
//     imageUrl: "/img/photocamers/Canon R6.jpg",
//   },
//   {
//     title: "Беззеркальная фотокамера Nikon Z5",
//     price: 89999,
//     imageUrl: "/img/photocamers/Nikon Z5.jpg",
//   },
//   {
//     title: "Беззеркальная фотокамера Sony 6600M",
//     price: 64999,
//     imageUrl: "/img/photocamers/Sony 6600M.jpg",
//   },
//   {
//     title: "Беззеркальная фотокамера Nikon Zfc",
//     price: 99999,
//     imageUrl: "/img/photocamers/Nikon Zfc.jpg",
//   },
// ];

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://613f7bf2e9d92a0017e17739.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://613f7bf2e9d92a0017e17739.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCard = (obj) => {
    axios.post("https://613f7bf2e9d92a0017e17739.mockapi.io/cart", obj);

    return setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer onClose={() => setCartOpened(false)} cartItems={cartItems} />
      )}
      <Header onClickCard={() => setCartOpened(true)} />
      <div className="content">
        <div className="seachBlock">
          {searchValue ? (
            `Поиск по: ${searchValue} `
          ) : (
            <h1>Все фотоаппараты</h1>
          )}
          <div className="search">
            <img
              width={18}
              height={18}
              src="/img/svg/search.svg"
              alt="Search"
            />
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
                onClickFavorite={() => console.log("Add to favorite")}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

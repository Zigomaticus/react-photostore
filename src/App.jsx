import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";

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
  const [favorites, setFavorites] = useState([]);
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

  const onRemoveItem = (id) => {
    axios.delete(`https://613f7bf2e9d92a0017e17739.mockapi.io/cart/${id}`);
    return setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://613f7bf2e9d92a0017e17739.mockapi.io/favorites", obj);
    return setFavorites((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          cartItems={cartItems}
          onRemoveItem={onRemoveItem}
        />
      )}
      <Header onClickCard={() => setCartOpened(true)} />
      <Home
        items={items}
        searchValue={searchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToCard={onAddToCard}
        onAddToFavorite={onAddToFavorite}
      />
    </div>
  );
}

export default App;

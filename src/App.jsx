import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
// Components
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

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

export const AppContext = createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get(
          "https://613f7bf2e9d92a0017e17739.mockapi.io/cart"
        );
        const favoritesResponse = await axios.get(
          "https://613f7bf2e9d92a0017e17739.mockapi.io/favorites"
        );
        const itemsResponse = await axios.get(
          "https://613f7bf2e9d92a0017e17739.mockapi.io/items"
        );

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных!");
      }
    }
    fetchData();
  }, []);

  const onAddToCard = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://613f7bf2e9d92a0017e17739.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://613f7bf2e9d92a0017e17739.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не удалось добавить товар в корзину!");
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://613f7bf2e9d92a0017e17739.mockapi.io/cart/${id}`);
      return setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины!");
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://613f7bf2e9d92a0017e17739.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://613f7bf2e9d92a0017e17739.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное!");
    }
  };

  const isAddedItem = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isAddedItem }}>
      <div className="wrapper">
        {cartOpened && (
          <Drawer
            onClose={() => setCartOpened(false)}
            cartItems={cartItems}
            onRemoveItem={onRemoveItem}
            setCartItems={setCartItems}
          />
        )}
        <Header onClickCard={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCard={onAddToCard}
                onAddToFavorite={onAddToFavorite}
              />
            }
          ></Route>
          <Route
            path="/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
          ></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

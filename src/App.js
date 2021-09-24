import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import axios from "axios";
import { Route } from "react-router-dom";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
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
    }

    fetchData();
  }, []);

  const onAddToCard = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://613f7bf2e9d92a0017e17739.mockapi.io/card/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.delete("https://613f7bf2e9d92a0017e17739.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Не удалось добавить в корзину");
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
      alert("Не удалось добавить в фавориты");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://613f7bf2e9d92a0017e17739.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  console.log(cartItems);
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        setCartOpened,
        cartItems,
        setCartItems,
        onAddToCard,
        onAddToFavorite,
      }}
    >
      <div className="wrapper">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            items={items}
            onAddToCard={onAddToCard}
            onAddToFavorite={onAddToFavorite}
          />
        </Route>
        <Route path="/favorites" exact>
          <Favorites
            onAddToFavorite={onAddToFavorite}
            onAddToCard={onAddToCard}
          />
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;

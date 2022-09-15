import React from "react";
// Components
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="seachBlock">
          <h1>Все фотоаппараты</h1>
          <div className="search">
            <img
              width={18}
              height={18}
              src="/img/svg/search.svg"
              alt="Search"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="camers">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;

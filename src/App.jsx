import React, { useState } from "react";
// Components
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: "Беззеркальная фотокамера Canon R",
    price: 12999,
    imageUrl: "/img/photocamers/Canon R.jpg",
  },
  {
    title: "Беззеркальная фотокамера Nikon Z7",
    price: 12300,
    imageUrl: "/img/photocamers/Nikon Z7.jpg",
  },
  {
    title: "Беззеркальная фотокамера Sony 7M3K",
    price: 18000,
    imageUrl: "/img/photocamers/Sony 7M3K.jpg",
  },
  {
    title: "Зеркальная фотокамера Nikon D500",
    price: 9600,
    imageUrl: "/img/photocamers/Nikon D500.jpg",
  },
  {
    title: "Беззеркальная фотокамера Canon R6",
    price: 14999,
    imageUrl: "/img/photocamers/Canon R6.jpg",
  },
  {
    title: "Беззеркальная фотокамера Nikon Z5",
    price: 9999,
    imageUrl: "/img/photocamers/Nikon Z5.jpg",
  },
  {
    title: "Беззеркальная фотокамера Sony 6600M",
    price: 8999,
    imageUrl: "/img/photocamers/Sony 6600M.jpg",
  },
  {
    title: "Беззеркальная фотокамера Nikon Zfc",
    price: 11000,
    imageUrl: "/img/photocamers/Nikon Zfc.jpg",
  },
];

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
          {arr.map((props) => (
            <Card
              key={props.title}
              props={props}
              onClickPlus={() => console.log("Add to liked")}
              onClickFavorite={() => console.log("Add to favorite")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

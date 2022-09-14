import React from "react";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/png/logo.png" alt="Logo" />
          <div>
            <h3 className="headerInfo">React photostore</h3>
            <p>Магазин лучших фотоаппаратов</p>
          </div>
        </div>
        <div className="headerRight">
          <ul>
            <li>
              <img width={18} height={18} src="/img/svg/cart.svg" alt="Cart" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/svg/user.svg" alt="User" />
            </li>
          </ul>
        </div>
      </header>

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
          <div className="card">
            <div className="favorite">
              <img
                width={31}
                height={31}
                src="/img/svg/heartWhite.svg"
                alt="Not favorite"
              />
            </div>

            <img
              width={133}
              height={112}
              src="/img/photocamers/Canon R.jpg"
              alt="Canon R"
            />
            <h5>Беззеркальная фотокамера Canon R</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="/img/svg/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/photocamers/Canon R.jpg"
              alt="Canon R"
            />
            <h5>Беззеркальная фотокамера Canon R</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="/img/svg/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

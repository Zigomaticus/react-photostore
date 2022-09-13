import React from "react";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <svg />
          <div>
            <h3 className="headerInfo">React photostore</h3>
            <p>Магазин лучших фотоаппаратов</p>
          </div>
        </div>
        <div className="headerRight">
          <ul>
            <li>
              <svg />
              <span>1205 руб.</span>
            </li>
            <li>
              <svg />
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <h1>Все фотоаппараты</h1>
        ...
      </div>
    </div>
  );
}

export default App;

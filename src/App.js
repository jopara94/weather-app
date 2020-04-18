import React from "react";
import logo from "./logo.svg";
import "./App.css";

const api = {
  key: "9ad9bdc8201622feae7e088e0631b3f4",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          ></input>
        </div>
      </main>
    </div>
  );
}

export default App;

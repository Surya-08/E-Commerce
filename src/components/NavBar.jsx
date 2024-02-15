import React, { useState } from "react";
import "./shopping.css";

const NavBar = () => {
  return (
    <div className="navigation">
      <ul>
        <li style={{ float: "left" }}>
          <a href="/" id="shoppe">
            Shoppe
          </a>
        </li>
        <li>
          <a href="/profile">My Account</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/checkout">Checkout</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <label>
            <input
              type="search"
              className="nav-search"
              placeholder="search"
            ></input>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

export function App(props) {
  const [click, setClick] = useState(false);
  const handleToggle = () => {
    setClick(!click);
  };
  return (
    <div className="App">
      <button id="toggle-btn" onClick={handleToggle}>
        toggle
      </button>
      {!click ? <h1>Hello React.</h1> : <h1>Hello React. Toggled</h1>}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

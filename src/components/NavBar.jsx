import React, { useState } from "react";
import "./shopping.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navigation">
      <ul>
        <li style={{ float: "left" }}>
          <Link href="/" id="shoppe">
            Shoppe
          </Link>
        </li>
        <li>
          <Link href="/profile">My Account</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/checkout">Checkout</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
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

import React, { useState } from "react";
import "./shopping.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="px-14 py-3 flex items-center justify-between">
      <Link href="/" id="shoppe">
        Shoppe
      </Link>
      <ul className="max-sm:hidden ">
        <div className="flex items-center space-x-6">
          <input type="search" name="Search" id="search" placeholder="Search here..." className="px-14 py-2 rounded-lg mx-auto" />
          <li className="hover:text-yellow-500">
            <Link href="/">Home</Link>
          </li>

          {/* will add condition to display only when user logged in  */}

          {/* {isLoggedIn && <li className="ml-auto">
            <Link href="/profile">My Account</Link>
          </li>} */}
          <li className="hover:text-yellow-500">
            <Link href="/wishlist">Wish List</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/signin">Sign In</Link>
          </li>
          <li className="bg-white px-4 py-2 rounded-md">
            <Link href="/signup">Sign Up</Link>
          </li>
        </div>
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

import React, { useState } from "react";
import "./shopping.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  return (
    // <div className="navigation">
    //   <ul>
    //     <li style={{ float: "left" }}>
    //       <Link to="/" id="shoppe">
    //         Shoppe
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/profile">My Account</Link>
    //     </li>
    //     <li>
    //       <Link to="/signup">Sign Up</Link>
    //     </li>
    //     <li>
    //       <Link to="/checkout">Checkout</Link>
    //     </li>
    //     <li>
    //       <Link to="/cart">Cart</Link>
    //     </li>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       
    //         <input
    //           type="search"
    //           className="nav-search"
    //           placeholder="search"
    //         ></input>
    //       </label>
    //     </li>
    //   </ul>
    // </div>
    <nav>
      <div className='w-full flex items-center justify-between px-8 py-4 md:px-12 border-b-2 '>
        <div className='flex items-center space-x-1 uppercase'>
          <Link href="/" id="shoppe">
            Shoppe
          </Link>
        </div>
        <div className='hidden md:block'>
          <ul className='flex space-x-4 lg:space-x-8 md:text-md lg:text-lg items-center'>
            <li>
              <input
                type="search"
                className="nav-search"
                placeholder="search"
              ></input>
            </li>
            <li className='uppercase hover:text-yellow-500'><Link to="/" className='transition-all ease-out duration-300'>Home</Link></li>
            <li className='uppercase hover:text-yellow-500'><Link to="wishlist" className='transition-all ease-out duration-300 flex items-center'>Wish List<svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#1C274C" />
            </svg></Link></li>
            <li className='uppercase hover:text-yellow-500'><Link to="checkout" className='transition-all ease-out duration-300 flex items-center'>Cart<svg fill="#000000" width="22px" height="22px" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M38.67,27.35A11.33,11.33,0,1,1,27.35,38.67h0A11.34,11.34,0,0,1,38.67,27.35ZM20.36,37.63a4,4,0,1,1-4,4v0A4,4,0,0,1,20.36,37.63ZM42.8,34.07l-6.06,6.79L34,38.09a.79.79,0,0,0-1.11,0l0,0-1.11,1.07a.7.7,0,0,0-.07,1l.07.08L35.6,44a1.62,1.62,0,0,0,1.14.48A1.47,1.47,0,0,0,37.87,44l7.19-7.87a.83.83,0,0,0,0-1l-1.12-1.05a.79.79,0,0,0-1.11,0ZM8.2,2a2.42,2.42,0,0,1,2.25,1.7h0l.62,2.16H46.36A1.5,1.5,0,0,1,47.9,7.31a1.24,1.24,0,0,1-.06.47h0L43.66,22.43a1.42,1.42,0,0,1-.52.82,16.42,16.42,0,0,0-4.47-.64,16,16,0,0,0-5.47,1H19.36a2.2,2.2,0,0,0-2.22,2.18,2.11,2.11,0,0,0,.13.75h0v.08a2.26,2.26,0,0,0,2.17,1.62h7.1a16,16,0,0,0-2.77,4.61H16a2.32,2.32,0,0,1-2.25-1.7h0L6.5,6.62H4.33A2.37,2.37,0,0,1,2,4.22V4.16A2.46,2.46,0,0,1,4.48,2H8.2Z" /></svg></Link></li>
            <li className='uppercase hover:text-yellow-500'><Link to="/signin" className='transition-all ease-out duration-300'>Sign In</Link></li>
            <li className='uppercase hover:text-yellow-500'><Link to="/signup" className='transition-all ease-out duration-300'>Sign Up</Link></li>
          </ul>
        </div>
        <div className='md:hidden cursor-pointer' onClick={() => setIsMenuClicked(!isMenuClicked)}>
          {isMenuClicked ?
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2a2924" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2a2924" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>}

        </div>
      </div>
      {isMenuClicked && <div className='md:hidden relative mx-auto py-4 transition-all ease-out duration-300'>
        <ul className='flex flex-col items-center space-y-4 lg:space-x-14 md:text-md lg:text-lg'>
          <li className='uppercase border-b-2'><Link to="/" className='transition-all ease-out duration-300'>Home</Link></li>
          <li className='uppercase border-b-2'><Link to="wishlist" className='transition-all ease-out duration-300 flex items-center'>Wish List<svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#1C274C" />
          </svg></Link></li>
          <li className='uppercase border-b-2'><Link to="checkout" className='transition-all ease-out duration-300 flex items-center'>Cart<svg fill="#000000" width="22px" height="22px" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M38.67,27.35A11.33,11.33,0,1,1,27.35,38.67h0A11.34,11.34,0,0,1,38.67,27.35ZM20.36,37.63a4,4,0,1,1-4,4v0A4,4,0,0,1,20.36,37.63ZM42.8,34.07l-6.06,6.79L34,38.09a.79.79,0,0,0-1.11,0l0,0-1.11,1.07a.7.7,0,0,0-.07,1l.07.08L35.6,44a1.62,1.62,0,0,0,1.14.48A1.47,1.47,0,0,0,37.87,44l7.19-7.87a.83.83,0,0,0,0-1l-1.12-1.05a.79.79,0,0,0-1.11,0ZM8.2,2a2.42,2.42,0,0,1,2.25,1.7h0l.62,2.16H46.36A1.5,1.5,0,0,1,47.9,7.31a1.24,1.24,0,0,1-.06.47h0L43.66,22.43a1.42,1.42,0,0,1-.52.82,16.42,16.42,0,0,0-4.47-.64,16,16,0,0,0-5.47,1H19.36a2.2,2.2,0,0,0-2.22,2.18,2.11,2.11,0,0,0,.13.75h0v.08a2.26,2.26,0,0,0,2.17,1.62h7.1a16,16,0,0,0-2.77,4.61H16a2.32,2.32,0,0,1-2.25-1.7h0L6.5,6.62H4.33A2.37,2.37,0,0,1,2,4.22V4.16A2.46,2.46,0,0,1,4.48,2H8.2Z" /></svg></Link></li>
          <li className='uppercase border-b-2'><Link to="/signin" className='transition-all ease-out duration-300'>Sign In</Link></li>
          <li className='uppercase border-b-2'><Link to="/signup" className='transition-all ease-out duration-300'>Sign Up</Link></li>
        </ul>
      </div>}
    </nav>
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

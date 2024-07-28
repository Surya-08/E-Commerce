import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "../Components/shopping.css";
import Cart from "../Components/Cart";
import ShippingDetails from "../Components/ShippingDetails";
import Home from "../Components/Home";
import UserRegistration from "../Components/UserRegistration";
import SliderWithMovingLabel from "../Components/sliderLabel";

const Flow = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<ShippingDetails />} />
        <Route path="/signup" element={<UserRegistration />} />
        <Route path="/slider" element={<SliderWithMovingLabel />} />
      </Routes>
    </div>
  );
};

export default Flow;

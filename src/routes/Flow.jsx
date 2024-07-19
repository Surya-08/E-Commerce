import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../components/shopping.css";
import Cart from "../components/Cart";
import ShippingDetails from "../components/ShippingDetails";
import Home from "../components/Home";
import UserRegistration from "../components/UserRegistration";
import SliderWithMovingLabel from "../components/sliderLabel";

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

import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SliderWithMovingLabel = () => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  const labelStyle = {
    position: "absolute",
    top: "-30px", // Adjust the vertical position as needed
    left: `${(value / 100) * 100}%`, // Position the label relative to the slider value
    transform: "translateX(-50%)", // Center the label horizontally
  };

  return (
    <div style={{ margin: "50px", position: "relative" }}>
      <Slider min={0} max={100} value={value} onChange={handleSliderChange} />
      <div style={labelStyle}>{value}</div>
    </div>
  );
};

export default SliderWithMovingLabel;

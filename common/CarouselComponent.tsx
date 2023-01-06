import React from "react";
import { Carousel } from "antd";

const CarouselComponent = () => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "260px",
    color: "#fff",
    lineHeight: "260px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Carousel>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};
export default CarouselComponent;

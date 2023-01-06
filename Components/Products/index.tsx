import React from "react";
import { Typography } from "antd";
import CardComponent from "../../common/CardComponent";
const { Title } = Typography;

const Products = () => {
  return (
    <div>
      <Title
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        Our Products
      </Title>
      <CardComponent title="TEST" description="TESTING DESCRIPTION" />
    </div>
  );
};

export default Products;

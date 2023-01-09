import React, { useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
import CardComponent from "../../common/CardComponent";
import { PhotosApiCall } from "../../common/servince/apiCall";
const { Title } = Typography;

const Products = () => {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<any>();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data: any) => data.json())
      .then((json) => {
        setResponse(json.slice(0, 12));
      });
    setLoading(false);
  }, [loading]);
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
      <Row gutter={[16, 32]}>
        {response &&
          response.length > 1 &&
          response.map((item: any) => {
            return (
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <CardComponent
                  key={item.id}
                  title={item.title}
                  description="TESTING DESCRIPTION"
                  img={item.url}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Products;

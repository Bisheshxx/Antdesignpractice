import React from "react";
import { Card } from "antd";

const { Meta } = Card;

interface IProps {
  label?: string;
  img?: string;
  title?: string;
  description?: string;
}

const CardComponent = (props: IProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  );
};

export default CardComponent;

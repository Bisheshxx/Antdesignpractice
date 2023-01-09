import React from "react";
import { Card } from "antd";
import Image from "next/image";

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
        <Image
          loader={() => props.img as string}
          height={240}
          width={240}
          alt="example"
          src={props.img as string}
        />
      }
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  );
};

export default CardComponent;

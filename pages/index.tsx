import { useEffect, useState } from "react";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import CarouselComponent from "../common/CarouselComponent";
import Products from "../Components/Products";

export default function Home() {
  const openNotification = () => {
    notification.open({
      message: "Welcome",
      description: "Welcome to the Website",
      onClick: () => {
        console.log("Notification Clicked!");
      },
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };
  const [date, setDate] = useState(1);
  useEffect(() => {
    openNotification();
  }, [Date]);
  return (
    <>
      <CarouselComponent />
      <Products />
    </>
  );
}

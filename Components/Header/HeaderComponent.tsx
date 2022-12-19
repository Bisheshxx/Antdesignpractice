import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

export const HeaderComponent = () => {
  const NavHeaders = [
    {
      key: "Home",
      label: "Home",
    },
    {
      key: "Something",
      label: "Something",
    },
    {
      key: "About Us",
      label: "About Us",
    },
  ];
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={NavHeaders}
      />
    </Header>
  );
};

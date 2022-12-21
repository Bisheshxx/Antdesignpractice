import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
const { Header } = Layout;

export const HeaderComponent = () => {
  const NavHeaders = [
    {
      key: "Home",
      label: <Link href="/">Home</Link>,
    },
    {
      key: "Components",
      label: "Components",
      children: [
        { key: "Something", label: <Link href="/test">Components</Link> },
        { key: "Something", label: <Link href="/test">Components</Link> },
      ],
    },
    {
      key: "About Us",
      label: "About Us",
    },
  ];
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" items={NavHeaders} />
    </Header>
  );
};

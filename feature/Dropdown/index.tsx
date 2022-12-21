import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

export const DropdownMenu = ({ items }: MenuProps) => {
  const [current, setCurrent] = useState("");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

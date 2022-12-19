import React from "react";
import { Button, Space } from "antd";

const test = () => {
  return (
    <Space
      wrap
      style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
    >
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Space>
  );
};

export default test;

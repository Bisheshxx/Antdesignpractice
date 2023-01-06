import React from "react";
import { Layout, Breadcrumb, theme } from "antd";
import { useRouter } from "next/router";
const { Content } = Layout;

export const BodyComponent = () => {
  const router = useRouter();
  console.log(router.asPath);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-content"
        style={{ background: colorBgContainer }}
      ></div>
    </Content>
  );
};

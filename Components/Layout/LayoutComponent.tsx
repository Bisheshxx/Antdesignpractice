import React from "react";
import { HeaderComponent } from "../Header/HeaderComponent";
import { FooterComponent } from "../Footer/FooterComponent";
import { BodyComponent } from "../Body/BodyComponent";
import { Layout, Breadcrumb, theme } from "antd";
import { useRouter } from "next/router";
const { Content } = Layout;
export const LayoutComponent = ({ children }: any) => {
  const router = useRouter();
  var path = router.asPath.replace("/", "") || "home";
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>{path}</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <main>{children}</main>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

import React from "react";
import { HeaderComponent } from "../Header/HeaderComponent";
import { FooterComponent } from "../Footer/FooterComponent";
import { Layout, Breadcrumb, theme } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
const { Content } = Layout;
export const LayoutComponent = ({ children }: any) => {
  const router = useRouter();
  var path = router.asPath.split("/");
  if (router.asPath === "/") {
    path = ["Home"];
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              {path.map((item, index) => {
                if (index === 0) {
                  return (
                    <>
                      <Link href={`/`}> Home </Link>
                    </>
                  );
                }
                if (index > 0) {
                  if (index == 1) {
                    return (
                      <>
                        <Link href={`${item}`}> {item} </Link>
                      </>
                    );
                  }
                  return (
                    <>
                      <Link href={`${item}`}>/ {item} </Link>
                    </>
                  );
                }
              })}
            </div>
          </Breadcrumb.Item>
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

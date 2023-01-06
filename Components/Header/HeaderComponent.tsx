import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import SearchBar from "../../common/SearchBar";
import { Col, Row } from "antd";
const { Header } = Layout;

export const HeaderComponent = () => {
  const Menustyle = {
    width: "100%",
  };
  const { SubMenu } = Menu;

  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <div style={Menustyle}>
          <Row>
            <Col span={8}>Logo</Col>
            <Col span={8}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Menu.Item key="home">
                  <Link href="/">Home</Link>
                </Menu.Item>
                <SubMenu key="Components" title={"Components"}>
                  <Menu.Item key="Components">
                    <Link href="/">Components</Link>
                  </Menu.Item>
                </SubMenu>
              </div>
            </Col>
            <Col span={8}>
              <div style={{ display: "flex", justifyContent: "right" }}>
                {/* <SearchBar /> */}
                <span className="avatar-item">
                  <Badge count={3}>
                    <Avatar shape="square" icon={<UserOutlined />} />
                  </Badge>
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Menu>
    </Header>
  );
};

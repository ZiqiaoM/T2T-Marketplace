import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import PersonalInfo from "./Personal/myaccount";
import Wishlist from "./Wishlist";

const { Header, Content, Sider } = Layout;

const PersonalCenter = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [showWishlistContent, setShowWishlistContent] = useState(false);
  const [showAccountContent, setShowAccountContent] = useState(false); // Add state for showing account content

  const handleWishlistClick = () => {
    setShowWishlistContent(true);
    setShowAccountContent(false); // Hide account content when wishlist is clicked
  };

  const handleAccountClick = () => {
    setShowAccountContent(true);
    setShowWishlistContent(false); // Hide wishlist content when account is clicked
  };

  return (
    <div style={{ padding: "0 80px" }}>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <div
            style={{ color: "white", textAlign: "center", margin: "24px 0" }}
          >
            User Name
          </div>{" "}
          {/* Add user name information */}
          <Menu defaultSelectedKeys={["2"]} mode="inline" theme="dark">
            <Menu.Item key="1" onClick={handleAccountClick}>
              <HomeOutlined />
              <span> Account </span>
            </Menu.Item>
            <Menu.Item key="2" onClick={handleWishlistClick}>
              <HomeOutlined />
              <span> Wishlist </span>
            </Menu.Item>
            <Menu.Item key="3" style={{ position: "absolute", bottom: 0 }}>
              {" "}
              {/* Add logout button */}
              <LogoutOutlined />
              <span> Logout </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {/* {showWishlistContent ? "wishlist content" : null}{" "} */}
              {showWishlistContent && <Wishlist />}{" "}
              {showAccountContent && <PersonalInfo />}{" "}
              {/* Render AccountContent component */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default PersonalCenter;

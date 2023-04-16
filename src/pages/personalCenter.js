import {
  HomeOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import PersonalInfo from "./Personal/myaccount";
import UserProduct from "./UserProduct";
import Wishlist from "./Wishlist";
const { Header, Content, Sider } = Layout;

const PersonalCenter = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [showWishlistContent, setShowWishlistContent] = useState(false);
  const [showAccountContent, setShowAccountContent] = useState(false); // Add state for showing account content
  const [showMyProduct, setShowMyProduct] = useState(false); // Add state for showing account content

  const handleWishlistClick = () => {
    setShowWishlistContent(true);
    setShowAccountContent(false);
    setShowMyProduct(false); // Hide account content when wishlist is clicked
  };
  const handleMyProductClick = () => {
    setShowMyProduct(true);
    setShowAccountContent(false); // Hide account content when wishlist is clicked
    setShowWishlistContent(false);
  };
  const handleAccountClick = () => {
    setShowAccountContent(true);
    setShowWishlistContent(false);
    setShowMyProduct(false); // Hide wishlist content when account is clicked
  };

  // Set the default page to display as Account page
  useEffect(() => {
    setShowAccountContent(true);
  }, []);

  return (
    <div style={{ padding: "0 80px" }}>
      {/* <Layout> */}
      <div className="pMain">
        <div className="m1">
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


          {/* <div style={{ color: "white", textAlign: "center", margin: "24px 0" }}>
            Hello, User Name
          </div> */}

          {/* Add user name information */}
          {/* <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark"> */}
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" onClick={handleAccountClick}>
              <HomeOutlined />
              <span> Change password </span>
            </Menu.Item>
            <Menu.Item key="2" onClick={handleWishlistClick}>
              <ShoppingCartOutlined />
              <span> My Wishlist </span>
            </Menu.Item>
            <Menu.Item key="3" onClick={handleMyProductClick}>
              <ShoppingOutlined />
              <span> My Product </span>
            </Menu.Item>

            <Menu.Item
              key="4"
              style={{ color: "white", position: "absolute", bottom: -70 }}
            >
              <Link href="/Login">
                <LogoutOutlined style={{ color: "#4B9CD3" }} />

                <span style={{ color: "#4B9CD3" }}> Logout </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        </div>


        {/* <Layout> */}
        <div className="m2">
          {/* <Header
            style={{
              background: "#fff",
              textAlign: "center",
              padding: 0,
            }}
          >
            Welcome to this website, Header!
          </Header> */}
          <Content
            // style={{
            //   margin: "0 16px 0",
            // }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 560,
                // background: colorBgContainer,
                // background: "#f0f0f0",
                
              }}
            >
              {showWishlistContent && <Wishlist />}{" "}
              {showAccountContent && <PersonalInfo />}{" "}
              {showMyProduct && <UserProduct />}{" "}
            </div>
          </Content>
          </div>
        {/* </Layout> */}

      </div>
      {/* </Layout> */}
      <style jsx>{`
      .pMain{
        // background:red !important;
        display:flex;
      }
      .m1{
        // background:yellow;
        margin-top:60px;
      }
      .m2{
        // background:pink;
      }
      `}</style>
    </div>
  );
};

export default PersonalCenter;

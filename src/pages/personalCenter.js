import {
  HeartOutlined,
  LogoutOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserProduct from "./UserProduct";
import UserWishlist from "./UserWishlist";

// import PersonalInfo from "./Personal/myaccount";
const { Header, Content, Sider } = Layout;

import { withIronSessionSsr } from "iron-session/next";
import prisma from "../lib/prisma";
import { sessionOptions } from "../lib/session";

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;
  if (user === undefined) {
    res.setHeader("location", "/Login");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user: {
          isLoggedIn: false,
          login: "",
          avatarUrl: "",
          id: -1,
          email: "NOTLOGIN",
          username: "NOTLOGIN",
        },
      },
    };
  }

  const product = await prisma.product.findMany({
    where: {
      seller_id: user.id,
    },
    select: {
      id: true,
      price: true,
      post_title: true,

      images: {
        select: {
          src: true,
        },
      },
    },
  });

  const wishlistItems = await prisma.wishlist.findMany({
    where: {
      user_id: user.id,
    },
    select: {
      product_id: true,
      products: {
        select: {
          // id:true,
          price: true,
          post_title: true,
          images: {
            select: {
              src: true,
            },
          },
        },
      },
    },
  });

  // const wishlistItems = await fetch("/api/fetchWishlistFromUser", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });

  return {
    props: {
      user: req.session.user,
      wishlistItems: wishlistItems,
      product: product,
    },
  };
},
sessionOptions);

const PersonalCenter = ({ user, wishlistItems, product }) => {
  console.log(product);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [showWishlistContent, setShowWishlistContent] = useState(false);
  // const [showAccountContent, setShowAccountContent] = useState(false); // Add state for showing account content
  const [showMyProduct, setShowMyProduct] = useState(false); // Add state for showing account content

  const handleWishlistClick = () => {
    setShowWishlistContent(true);
    // setShowAccountContent(false);
    setShowMyProduct(false); // Hide account content when wishlist is clicked
  };
  const handleMyProductClick = () => {
    setShowMyProduct(true);
    // setShowAccountContent(false); // Hide account content when wishlist is clicked
    setShowWishlistContent(false);
  };
  // const handleAccountClick = () => {
  //   setShowAccountContent(true);
  //   setShowWishlistContent(false);
  //   setShowMyProduct(false); // Hide wishlist content when account is clicked
  // };

  // Set the default page to display as Account page
  useEffect(() => {
    setShowWishlistContent(true);
  }, []);

  return (
    <div style={{ padding: "0 80px" }}>
      {/* <Layout> */}
      <div className="pMain">
        <div className="m1">
          <Sider
            breakpoint="lg"
            // collapsedWidth="0"
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
              {/* <Menu.Item key="1" onClick={handleAccountClick}>
              <HomeOutlined />
              <span> Change password </span>
            </Menu.Item> */}
              <Menu.Item key="1" onClick={handleWishlistClick}>
                <HeartOutlined />
                <span> My Wishlist </span>
              </Menu.Item>
              <Menu.Item key="2" onClick={handleMyProductClick}>
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
              {showWishlistContent && (
                <UserWishlist wishlistItems={wishlistItems} />
              )}{" "}
              {/* {showAccountContent && <PersonalInfo />}{" "} */}
              {showMyProduct && <UserProduct product={product} />}{" "}
            </div>
          </Content>
        </div>
        {/* </Layout> */}
      </div>
      {/* </Layout> */}
      <style jsx>{`
        .pMain {
          // background:red !important;
          display: flex;
        }
        .m1 {
          // background:yellow;
          margin-top: 60px;
        }
        .m2 {
          // background:pink;
          width: 80%;
          margin-top: -60px;
        }
      `}</style>
    </div>
  );
};

export default PersonalCenter;

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

import prisma from "../lib/prisma"
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '../lib/session'

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user
  if (user === undefined) {
    res.setHeader('location', '/Login')
    res.statusCode = 302
    res.end()
    return {
      props: {
        user: { isLoggedIn: false, login: '', avatarUrl: '',id:-1,email:"NOTLOGIN",username:"NOTLOGIN" },
      },
    }
  }

  const product = await prisma.product.findMany({
          where: {
            seller_id: user.id,
          },
          select: {
            id: true,
            price:true,
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
          price:true,
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
    props: { user: req.session.user, wishlistItems:wishlistItems, product:product},
  }
},
sessionOptions)


const PersonalCenter = ({user,wishlistItems,product}) => {

  console.log(product);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [showWishlistContent, setShowWishlistContent] = useState(false);
  //   const [showAccountContent, setShowAccountContent] = useState(false); // Add state for showing account content
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
  //   const handleAccountClick = () => {
  //     setShowAccountContent(true);
  //     setShowWishlistContent(false);
  //     setShowMyProduct(false); // Hide wishlist content when account is clicked
  //   };

  // Set the default page to display as Account page
  useEffect(() => {
    setShowWishlistContent(true);
  }, []);

  return (
    <div style={{ padding: "0 80px" }}>
      <Layout style={{ backgroundColor: "white" }}>
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
          {/* <div className="logo" /> */}
          <div
            style={{ color: "white", textAlign: "center", margin: "24px 0" }}
          >
            Hello, {user.username}
          </div>
          {/* Add user name information */}
          <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
            {/* <Menu.Item key="1" onClick={handleAccountClick}>
              <HomeOutlined />
              <span> Account </span>
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
              style={{ color: "white", position: "absolute", bottom: 0 }}
            >
              <Link href="/Login">
                <LogoutOutlined style={{ color: "white" }} />

                <span style={{ color: "white" }}> Logout </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ backgroundColor: "white" }}>
          <Header
            style={{
              background: "#fff",
              textAlign: "center",
              padding: 0,
              margin: "0 0 0",
              position: "absolute",
              top: "250px",
              right: "400px",
            }}
          >
            <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
              Welcome to your posted product
            </h1>
          </Header>
          <Content
            style={{
              margin: "0 0 0",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 560,
                background: colorBgContainer,
              }}
            >
              {showWishlistContent && <UserWishlist wishlistItems={wishlistItems} />}{" "}
              {/* {showAccountContent && <PersonalInfo />}{" "} */}
              {showMyProduct && <UserProduct  product={product}/>}{" "}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default PersonalCenter;

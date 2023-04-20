import { useRef } from "react";
import { Container } from "reactstrap";
// import {NavLink, Link} from "react-router-dom";
import WishltIcon from "@mui/icons-material/Loyalty";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
// import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";
import "./Header.module.css";

import Carts from "../UI/Cart/Carts";

//import image 0130
import Image from "next/image";

import { useRouter } from "next/router";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Products",
    path: "/AllProducts",
  },
  {
    display: "About",
    path: "/personalCenter",
    // path: "/Login",
  },
  {
    display: "Publish Post",
    path: "/post",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // for cart list
  // const dispatch = useDispatch();
  // const toggleCart = ()=>{
  //   dispatch(cartUiActions.toggle())
  // }

  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  const router = useRouter();
  const handleClick = (event) => {
    event.preventDefault();
    router.push("/WishList");
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  return (
    <>
      <header className="header">
        <Container>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              {/* <img src="/images/T2T.png" alt="logo" width="130px" /> */}
              <Image
                src="/images/T2T.png"
                alt="logo"
                width={130}
                height={125}
              />
              <logo />
            </div>

            {/* menu */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <Link
                    href={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active_menu" : ""
                    }
                    style={{
                      fontSize: "1rem",
                      color: "rgb(19, 41, 75)",
                      fontWeight: "600",
                      transition: "0.3s",
                    }}
                  >
                    {item.display}
                  </Link>
                ))}
              </div>
            </div>
            {/*-------- nav icons ----------*/}
            <div className="nav_right d-flex align-items-center gap-4">
              {/* change toggleCart to handleClick */}
              <span className="wishlt_icon" onClick={handleClick}>
                <WishltIcon />
                <span className="wishlt_badge">{totalQuantity}</span>
              </span>
              <span className="user">
                {/* <Link href="/Personal/myaccount"> */}
                <Link href="/Login">
                  <PersonOutlineIcon />
                </Link>
              </span>
            </div>
          </div>
        </Container>
      </header>
      {showCart && <Carts />}

      <style jsx>{`
        .header {
          width: 100%;
          height: 100px;
          line-height: 80px;
          // background-color: aquamarine;
          margin-bottom: 33px;
        }
        .logo {
          text-align: center;
        }
        .logo img {
          width: calc(100% - 60%);
          object-fit: contain;
        }

        .menu a {
          font-weight: 600;
          font-size: 1rem;
          color: rgb(19, 41, 75);
          text-decoration: none;
          transition: 0.3s;
        }

        .menu a:hover {
          color: rgb(231, 189, 6);
        }
        .active_menu {
          color: rgb(231, 189, 6) !important;
        }

        /* .wishlt_icon, .user, .mobile_menu{
      font-size: 1.2rem;
      color: #212245;
      cursor: pointer;
  } */
        .wishlt_icon {
          position: relative;
          font-size: 1.2rem;
          color: #212245;
          cursor: pointer;
        }
        .wishlt_badge {
          position: absolute;
          top: 20px;
          right: -10px;
          background-color: rgb(202, 30, 30);
          color: white;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile_menu {
          font-weight: 600;
          display: none;
          font-size: 1.2rem;
          color: #212245;
          cursor: pointer;
        }
        .header_shrink {
          position: sticky;
          top: 0;
          left: 0;
          box-shadow: 5px 5px 15px -5px #fde4e4;
        }

        @media only screen and (max-width: 992px) {
          .navigation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #14152b;
            z-index: 99;
          }
          .menu {
            position: absolute;
            top: 0;
            right: 0;
            width: 250px;
            height: 100%;
            background: #fff;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 100;
            line-height: 20px;
          }
          .show_menu {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Header;

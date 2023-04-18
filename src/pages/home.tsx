import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CategorySect from "../components/UI/Category/Category";
import ProductCard from "../components/UI/Product-card/ProductCard";
import Hero from "./Hero/Hero";
import "./home.module.css";

// import products from "../sample-data/products";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;
  if (user === undefined) {
    // res.setHeader('location', '/Login')
    // res.statusCode = 302
    // res.end()
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

  return {
    props: { user: req.session.user },
  };
},
sessionOptions);

const Home: NextPage = ({ user }) => {
  //0407 update products display

  const [productsDisp, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        data.forEach((x) => {
          x.images = x.images[0].src;
        });
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //   const userInfo = {email:"frontpage@gmail.com"}
  //   setUser(userInfo);
  // }, []);

  const [Category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(productsDisp);

  useEffect(() => {
    if (Category === "ALL") {
      setAllProducts(productsDisp);
    }
    if (Category === "KITCHENWARES") {
      const filteredProducts = productsDisp.filter(
        (item) => item.category_name === "Kitchenwares"
      );
      setAllProducts(filteredProducts);
    }
    if (Category === "CLOTHING") {
      const filteredProducts = productsDisp.filter(
        (item) => item.category_name === "Clothing"
      );
      setAllProducts(filteredProducts);
    }
    if (Category === "ELECTRONICS") {
      const filteredProducts = productsDisp.filter(
        (item) => item.category_name === "Electronics"
      );
      setAllProducts(filteredProducts);
    }
    if (Category === "FURNITURES") {
      const filteredProducts = productsDisp.filter(
        (item) => item.category_name === "Furnitures"
      );
      setAllProducts(filteredProducts);
    }
    if (Category === "OTHERS") {
      const filteredProducts = productsDisp.filter(
        (item) => item.category_name === "Others"
      );
      setAllProducts(filteredProducts);
    }
  }, [Category, productsDisp]);

  return (
    <Helmet title="Home">
      <section>
        <Container className="home_container">
          {/* <Carts /> */}
          <Hero />
        </Container>
      </section>
      <section className="pt-0">
        <CategorySect />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">
                Welcome, {user.username}!
              </h5>
              {/* test */}

              <h5 className="feature_subtitle mb-4">At here,</h5>
              <h3 className="feature_title">
                you will find an alternate sort of market.
              </h3>
              <h3 className="feature_title">
                Bring <span>your stuff</span>, soon.
              </h3>
              <p className="mb-1 mt-4 feature_text">
                Don&apos;t leave your belongings behind rather pass them on.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Finds</h2>
            </Col>
            <Col lg="12">
              <div className="pro_category d-flex align-items-center justify-content-center gap-5">
                {/* <button className='all_btn proBtnActive' onClick={()=>setCategory('ALL')}>All</button> */}
                <button
                  className={`all_btn  ${
                    Category === "ALL" ? "proBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    Category === "KITCHENWARES" ? "proBtnActive" : ""
                  }`}
                  onClick={() => setCategory("KITCHENWARES")}
                >
                  Kitchenwares
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    Category === "CLOTHING" ? "proBtnActive" : ""
                  }`}
                  onClick={() => setCategory("CLOTHING")}
                >
                  Clothing
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    Category === "ELECTRONICS" ? "proBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ELECTRONICS")}
                >
                  Electronics
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    Category === "FURNITURES" ? "proBtnActive" : ""
                  }`}
                  onClick={() => setCategory("FURNITURES")}
                >
                  Furnitures
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    Category === "OTHERS" ? "proBtnActive" : ""
                  }`}
                  onClick={() => setCategory("OTHERS")}
                >
                  Others
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} user_id={user.id} />
              </Col>
            ))}
            {/* <h2>---Testing---</h2>
            {productsDisp.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))} */}
          </Row>
        </Container>
      </section>
      <style jsx>
        {`
          .home_container {
            margin-left: -12px;
          }

          .feature_subtitle {
            color: orange;
          }
          .feature_title span {
            color: orange;
          }
          .feature_text {
            color: grey;
          }

          .pro_category {
            background-color: rgb(78, 163, 216);
            text-align: center;
            margin-top: 30px;
            padding: 20px 0px;
            border-radius: 8px;
          }
          .pro_category button {
            border: none;
            outline: none;
            padding: 7px 20px;
            background: transparent;
            color: white;
          }
          .proBtnActive {
            background-color: white !important;
            border-radius: 5px;
            color: rgb(78, 163, 216) !important;
          }
        `}
      </style>
    </Helmet>
  );
};

export default Home;

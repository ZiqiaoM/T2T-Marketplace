import React, { useState, useEffect } from "react";
import { type NextPage } from "next";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import Hero from "./Hero/Hero";
import "./home.module.css";
import CategorySect from "../components/UI/Category/Category";

import ProductCard from "../components/UI/Product-card/ProductCard";

import products from "../sample-data/products";
// import proCategoryImg1 from '../images/product_01_image_01.jpg';
// import proCategoryImg2 from '../images/product_02_image_01.jpg';
// import proCategoryImg3 from '../images/product_03_image_01.jpg';
// import proCategoryImg4 from '../images/product_04_image_01.jpg';
// import proCategoryImg5 from '../images/product_05_image_01.jpg';

// const featureData= [

// ];

// import {useSelector} from 'react-redux';

const Home: NextPage = () => {
  const [Category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  // const showCart = useSelector(state=>state.cartUi.cartIsvisible);

  useEffect(() => {
    if (Category === "ALL") {
      setAllProducts(products);
    }
    if (Category === "KITCHENWARES") {
      const filteredProducts = products.filter(
        (item) => item.category === "Kitchenwares"
      );
      setAllProducts(filteredProducts);
    }
    if (Category === "CLOTHING") {
      const filteredProducts = products.filter(
        (item) => item.category === "Clothing"
      );
      setAllProducts(filteredProducts);
    }
    if (Category === "ELECTRONICS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Electronics"
      );
      setAllProducts(filteredProducts);
    }
    if (Category === "FURNITURES") {
      const filteredProducts = products.filter(
        (item) => item.category === "Furnitures"
      );
      setAllProducts(filteredProducts);
    }
    if (Category === "OTHERS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Others"
      );
      setAllProducts(filteredProducts);
    }
  }, [Category]);

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
                {/* <button><img src={proCategoryImg1} alt='Pasta Maker' width='130px' height='140px' />Pasta Maker</button>
              <button><img src={proCategoryImg2} alt='Coffee Grinder' width='130px' height='140px'/>Pasta Maker</button>
              <button><img src={proCategoryImg3} alt='Kate Spade New York Jumpsuit' width='130px' height='140px' />KSNY Jumpsuit</button>
              <button><img src={proCategoryImg4} alt='Mini Fridge' width='130px' height='140px'/>Mini Fridge</button>
              <button><img src={proCategoryImg5} alt='Office Chair' width='130px' height='140px' />Office Chair</button> */}
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
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

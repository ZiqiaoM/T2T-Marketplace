import React, { useState, useEffect } from "react";
// import Layer1 from './Layers/Layer1';
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import ProductDetails from "./ProductDetails";

import SearchIcon from "@mui/icons-material/Search";
import products from "../sample-data/products";
import ProductCard from "../components/UI/Product-card/ProductCard";
import "./AllProduct.css";

import ReactPaginate from "react-paginate";

const AllProducts = () => {
  // for searching
  const [searchTerm, setSearchTerm] = useState("");
  // const [productData, setProductData] = useState(products)

  // for paging
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = products.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(products.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // <section>
  //   {/* <Layer1 /> */}
  //   <div>ALLPRODUCTs</div>
  //   <ProductDetails />
  // </section>
  return (
    <Helmet title="All Foods">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search_widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <SearchIcon />
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting_widget text-end">
                <select className="w-30">
                  <option>Default</option>
                  <option value="ascending">Alphabatically, A-Z</option>
                  <option value="descending">Alphabatically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {/* {
            products.map((item)=> (
            <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mb-4">
              {" "}
            <ProductCard item={item} />
            </Col>
            ))
          } */}
            {/* filter products via keyword*/}
            {
              // products
              displayPage
                .filter((item) => {
                  if (searchTerm.value === "") return item;
                  if (
                    item.title
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  )
                    return item;
                })
                .map((item) => (
                  <Col
                    lg="3"
                    md="4"
                    sm="6"
                    xs="6"
                    key={item.id}
                    className="mb-4"
                  >
                    {" "}
                    <ProductCard item={item} />
                  </Col>
                ))
            }

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllProducts;

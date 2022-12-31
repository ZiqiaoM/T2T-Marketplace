// import React, {useState, useEffect} from 'react';
// import products from '../sample-data/products';
// import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col} from "reactstrap";
// import CommonSection from '../components/UI/common-section/CommonSection'
import productImg from '../images/product_01_image_01.jpg'
import './ProductDetails.css'


const ProductDetails = () => {
  // const [tab,setTab] = useState('desc')


  // const {id}= useParams()
  // const product = products.find(product=>product.id===id)
  
  // const [previewImg, setPreviewImg] = useState(product.image01)

  return <Helmet title='Product-details'>
    <section>
      <Container>
        <Row>
          {/* <Col lg='2' md='2'>
            <div className="product_images">
              <div className="img_item" onClick={()=>setPreviewImg(product.image01)}>
                <img src={product.image01} alt="" className='w-100'/>
              </div>
              <div className="img_item" onClick={()=>setPreviewImg(product.image02)}>
                <img src={product.image02} alt="" className='w-100'/>
              </div>
            </div>
          </Col>
          <Col lg='4' md='4'>
            <div className="product_main-img">
              <img src={previewImg} alt='' className='w-100'/>
            </div>
          </Col> */}

          <Col lg='2' md='2'>
            <div className="product_images">
              <div className="img_item" >
                <img src={productImg} alt="" className='w-100'/>
              </div>
              <div className="img_item" >
                <img src={productImg} alt="" className='w-100'/>
              </div>
            </div>
          </Col>
          <Col lg='4' md='4'>
            <div className="product_main-img">
              <img src={productImg} alt='' className='w-100'/>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="single_product-content">
              <h2 className='product_title mb-3'>Pasta Maker</h2>
              <span className='product_price'>Price:<span>$10</span></span>
              <p className='category mb-5'>Category: <span>Kitchenwares</span></p>
              <button className='addToWl_btn'>Add to Wish List</button>
            </div>
          </Col>
          <Col lg='12'>
            <div className="tabs d-flex align-items-center gap-5 py-3">
              <h6 className='tab_active'>Description</h6>
            </div>

            <div className="tab_content">
              <p>Manual hand press,adjustable thickness settings. Use level: 90% new. Location: Davis Library.</p>
            </div>

            {/* <div className="tab_form">
              <form className='form'>
                <div>

                </div>
              </form>
            </div> */}

          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
};
export default ProductDetails;
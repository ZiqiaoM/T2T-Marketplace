import React from 'react';
import {Container, Row, Col} from "reactstrap";

import cookingicon from '../../../images/cooking-pan.svg';
import clothingicon from '../../../images/clothing.svg';
import electronicsicon from '../../../images/laptop.svg';
import furnitureicon from '../../../images/furniture.svg';
import othericon from '../../../images/add.svg';
import freeicon from '../../../images/free-label.svg';

import './Category.css';

const CategoryData =[
    {
        display:'Kitchenwares',
        imgUrl:cookingicon
    },
    {
        display:'Clothing',
        imgUrl:clothingicon
    },
    {
        display:'Electronics',
        imgUrl:electronicsicon
    },
    {
        display:'Furnitures',
        imgUrl:furnitureicon
    },
    {
        display:'Free Stuffs',
        imgUrl:freeicon
    },
    {
        display:'Others',
        imgUrl:othericon
    },   
]



const Category = () => {
  return <Container className='cate_container'>
    <Row>
        {
            CategoryData.map((item, index)=>(
                <Col lg='2' md='4'>
                    <div className="category_item d-flex align-items-center gap-2">
                        <div className="category_img">
                            <img src={item.imgUrl} alt='category_item' width='60px' height='60px'/>
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                </Col>
            ))
        }
    </Row>
  </Container>
}

export default Category
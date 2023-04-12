import React from 'react';
import {Container, Row, Col} from "reactstrap";
import Image from 'next/image';


const CategoryData =[
    {
        display:'Kitchenwares',
        imgUrl: "/images/cooking-pan.svg"
    },
    {
        display:'Clothing',
        imgUrl: "/images/clothing.svg"
    },
    {
        display:'Electronics',
        imgUrl: "/images/laptop.svg"
    },
    {
        display:'Furnitures',
        imgUrl: "/images/furniture.svg"
    },
    {
        display:'Free Stuffs',
        imgUrl: "/images/free-label.svg"
    },
    {
        display:'Others',
        imgUrl: "/images/add.svg"
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
                            {/* <img src={item.imgUrl} alt='category_item' width='60px' height='60px'/> */}
                            <Image src={item.imgUrl} alt='category_item' width={45} height={45} />
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                </Col>
            ))
        }
    </Row>
    <style jsx>{`
    .cate_container{
        background-color: blues;
    }
    .category_item{
        background-color: rgb(226, 244, 244);
        padding: 15px 8px;
        border-radius: 5px;
        cursor:pointer;
        transition: 0.4s;
        height:75px;
    }

    .category_item:hover{
        transform:translateY(-15px);
    }`}</style>
  </Container>
}

export default Category

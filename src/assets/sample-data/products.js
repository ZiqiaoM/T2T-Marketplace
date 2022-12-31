import React from 'react';

//all images imported from images folder
import product_01_image_01 from "../images/product_01_image_01.jpg";
import product_01_image_02 from "../images/product_01_image_02.jpg";

import product_02_image_01 from "../images/product_02_image_01.jpg";
import product_02_image_02 from "../images/product_02_image_02.jpg";

import product_03_image_01 from "../images/product_03_image_01.jpg";
import product_03_image_02 from "../images/product_03_image_02.jpg";

import product_04_image_01 from "../images/product_04_image_01.jpg";
import product_04_image_02 from "../images/product_04_image_02.jpg";

import product_05_image_01 from "../images/product_05_image_01.jpg";
import product_05_image_02 from "../images/product_05_image_02.jpg";

import product_06_image_01 from "../images/product_06_image_01.jpg";
import product_06_image_02 from "../images/product_06_image_02.jpg";

const products = [
    {
        id:"01",
        title: "Pasta Maker",
        price: 15.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        category:"Kitchenwares",
        desc:"Manual hand press,adjustable thickness settings."
    },
    {
        id:"02",
        title: "Coffee Grinder",
        price: 20.0,
        image01: product_02_image_01,
        image02: product_02_image_02,
        category:"Kitchenwares",
        desc:"Easy to assemble and clean."
    },
    {
        id:"03",
        title: "KSNY Jumpsuit",
        price: 91.6,
        image01: product_03_image_01,
        image02: product_03_image_02,
        category:"Clothing",
        desc:"This item is in excellent condition with only light signs of wear, if any."
    },
    {
        id:"04",
        title: "Compact Refrigerators",
        price: 38.0,
        image01: product_04_image_01,
        image02: product_04_image_02,
        category:"Electronics",
        desc:"This item is in good condition."
    },
    {
        id:"05",
        title: "Office Chair",
        price: 20.0,
        image01: product_05_image_01,
        image02: product_05_image_02,
        category:"Furnitures",
        desc:"This item is in good condition."
    },
    {
        id:"06",
        title: "LEGO Icons Flower",
        price: 20.0,
        image01: product_06_image_01,
        image02: product_06_image_02,
        category:"Others",
        desc:"This item is in good condition."
    },

]


// export const products = () => {
//   return (
//     <div>products</div>
//   )
// }
export default products;
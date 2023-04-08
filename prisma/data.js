// import { Prisma } from "@prisma/client";
const users = [
  {
    username: "hhdj",
    email: "hhdj@gmail.com",
  },
  {
    username: "sssd",
    email: "sssd@gmail.com",
  },
  {
    username: "qqww",
    email: "qqww@gmail.com",
  },
];

const products = [
  {
    post_title: "Cool helmet.",
    price: 19.95,
    condition: "New",
    location: "Off Campus",
    if_sold: true,
    seller_id: 3,
    category_name: "Electronics",
  },
  {
    post_title: "Grey T-Shirt",
    price: 22.95,
    condition: "New",
    location: "Off Campus",
    if_sold: false,
    seller_id: 2,
    category_name: "Clothing",
  },
  {
    post_title: "Grey socks",
    price: 44.32,
    condition: "Used",
    location: "Off Campus",
    if_sold: false,
    seller_id: 1,
    category_name: "Clothing",
  },
  {
    post_title: "Pasta Maker",
    price: 15.0,
    condition: "New",
    location: "Off Campus",
    if_sold: false,
    seller_id: 2,
    category_name: "Kitchenwares",
  },
  {
    post_title: "Coffee Grinder",
    price: 20.32,
    condition: "Used",
    location: "On Campus",
    if_sold: false,
    seller_id: 4,
    category_name: "Kitchenwares",
  },
  {
    post_title: "KSNY Jumpsuit",
    price: 91.6,
    condition: "Used",
    location: "On Campus",
    if_sold: false,
    seller_id: 3,
    category_name: "Funitures",
  },
];

const images = [
  {
    src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    product_id: 2,
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    product_id: 2,
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    product_id: 4,
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/category-page-03-image-card-01.jpg",
    product_id: 1,
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    product_id: 3,
  },
  {
    src: "/images/product_01_image_01.jpg",
    product_id: 4,
  },
  {
    src: "/images/product_01_image_02.jpg",
    product_id: 4,
  },
  {
    src: "/images/product_02_image_01.jpg",
    product_id: 5,
  },
  {
    src: "/images/product_02_image_02.jpg",
    product_id: 5,
  },
  {
    src: "/images/product_03_image_01.jpg",
    product_id: 6,
  },
  { src: "/images/product_03_image_02.jpg", product_id: 6 },
];

module.exports = {
  products,

  users,
  images,
};

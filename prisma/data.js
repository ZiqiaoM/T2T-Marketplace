const { Prisma } = require("@prisma/client");

const categories = [
  {
    name: "Cloth",
  },
  {
    name: "Electron",
  },
  {
    name: "Kitchenware",
  },
  {
    name: "Food",
  },
];

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
    category_id: 1,
  },
  {
    post_title: "Grey T-Shirt",
    price: 22.95,
    condition: "New",
    location: "Off Campus",
    if_sold: false,
    seller_id: 2,
    category_id: 1,
  },
  {
    post_title: "Grey T-Shirt",
    price: 22.95,
    condition: "New",
    location: "Off Campus",
    if_sold: false,
    seller_id: 2,
    category_id: 2,
  },
  {
    post_title: "Grey socks",
    price: 44.32,
    condition: "Used",
    location: "Off Campus",
    if_sold: false,
    seller_id: 1,
    category_id: 1,
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
    src: "https://tailwindui.com/img/ecommerce-images/category-page-07-image-card-01.jpg",
    product_id: 4,
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    product_id: 1,
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    product_id: 3,
  },
];

module.exports = {
  products,
  categories,
  users,
  images,
};

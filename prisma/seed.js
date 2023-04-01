// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

// async function main() {
//   let user1 = {
//     seller_name: "nux",
//     post_title: "apple watch",
//     price: 25.5,
//     if_sold :true,
//     catagory: "books"

//   }
//   let user2 = {
//     seller_name: "Yranchan",
//     post_title: "Switch",
//     price: 299.99,
//     if_sold :false,
//     catagory: "tech"
//   }
//   // const u1 = await prisma.User.create(
//   //   {
//   //     data:{
//   //       username:"123",
//   //       email:"1233344@gmail.com"
//   //     }
//   // }
//   // )
//   const u2 = await prisma.Product.create({
//     data:{
//       post_title:"coffee_maker",
//       price: 99.0,
//       if_sold :false,
//       category: "tech",
//       seller:{
//         connectOrCreate:{
//           where:{username:"antoine"},
//           create:{
//             username:"antoine",
//             email:"asss",
//           }
//         }
//       }
//     }
//   })

//   // console.log({ u2})
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



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


const load = async () => {
  try {
    // await prisma.image.deleteMany();
    // console.log("Deleted records in image table");

    // await prisma.product.deleteMany();
    // console.log("Deleted records in product table");

    // await prisma.user.deleteMany();
    // console.log("Deleted records in user table");

    // await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    // console.log("reset product auto increment to 1");

    // await prisma.$queryRaw`ALTER TABLE Image AUTO_INCREMENT = 1`;
    // console.log("reset image auto increment to 1");

    // await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;
    // console.log("reset user auto increment to 1");

    // await prisma.user.createMany({
    //   data: users,
    // });
    // console.log("Added user data");

    await prisma.product.createMany({
      data: products,
    });
    console.log("Added product data");

    await prisma.image.createMany({
      data: images,
    });
    console.log("Added image data");
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

load();

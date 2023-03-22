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
const { products, categories, users, images } = require("./data.js");
// const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.category.deleteMany();
    console.log("Deleted records in category table");

    await prisma.image.deleteMany();
    console.log("Deleted records in image table");

    await prisma.product.deleteMany();
    console.log("Deleted records in product table");

    await prisma.user.deleteMany();
    console.log("Deleted records in user table");

    await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    console.log("reset product auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
    console.log("reset category auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE Image AUTO_INCREMENT = 1`;
    console.log("reset image auto increment to 1");

    await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;
    console.log("reset user auto increment to 1");

    await prisma.user.createMany({
      data: users,
    });
    console.log("Added user data");
    await prisma.category.createMany({
      data: categories,
    });
    console.log("Added category data");

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

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {

tb = await prisma.product.create({
    data: {
      "post_title":"goos",
      "price":100,
      "seller_id":1,
      "condition":"good",
      "location": "On Campus",
      "category_name":"Kitchen",
      "product_details" :"?",
      "reference_link" :"???",
    //   "contact_info" :document.querySelector("#email_address").value,
      "if_sold":false,
      images: {
        create: [
            {"src":'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg'}
        ]
    }
    },
  })


}
// async function main() {
//     await prisma.$connect();

//     let user1 = {
//       seller_name: "nux",
//       post_title: "apple watch",
//       price: 25.5,
//       if_sold :true,
//       catagory: "books"

//     }
//     let user2 = {
//       seller_name: "Yranchan",
//       post_title: "Switch",
//       price: 299.99,
//       if_sold :false,
//       catagory: "tech"
//     }

//     await prisma.products.create({
//       data: user1,
//     });

//     await prisma.products.create({
//       data: user2,
//     });

//     const userss = await prisma.products.findMany()
//     console.log(userss)
//   }

  main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

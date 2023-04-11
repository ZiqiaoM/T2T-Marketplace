const { PrismaClient } = require("@prisma/client");
const path = require("path");
const prisma = new PrismaClient();

data = {
  "post_title":"goos",
  "price":100,
  "seller_id":1,
  "condition":"good",
  "location": "On Campus",
  "category_name":"Kitchen",
  "product_details" :"?",
  "reference_link" :"???",
  "email": "test@gmail.com",
  "if_sold":false,
};

async function main() {

const paths = await prisma.product.findMany({
    select: {
    id: true,
    // name: true,
  },
}
); 

const result = await prisma.wishlist.create({
  data: {
      "product_id":2,
      "user_id":1,
      }
  },
)
  // console.log(paths);
  // paths.forEach((p)=>{p.id=p.id.toString()});
  // console.log(paths);
  // console.log(paths.map((id) => (
  //   {params:  id }
  //  )),);
// tb = await prisma.product.create({
//     data: {
//       "post_title":"goos",
//       "price":100,
//       "seller_id":1,
//       "condition":"good",
//       "location": "On Campus",
//       "category_name":"Kitchen",
//       "product_details" :"?",
//       "reference_link" :"???",
//       "email": "test@gmail.com",
//       "if_sold":false,
//       images: {
//         create: [
//             {"src":'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg'}
//         ]
//     }
//     },
//   })
};

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

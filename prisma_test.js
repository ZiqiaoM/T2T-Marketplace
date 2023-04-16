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

const wishlistItems = await prisma.wishlist.findMany({
  // where: {
  //   wishlist: {
  //     user_id: 2,
  //   },
  // },
  select: {
    product_id: true,
    products: {
      select: {
        post_title: true,
        images: {
          select: {
            src: true,
          },
        },
      },
    },
  },
});

const product = await prisma.product.findMany({
  where: {
    seller_id: 2,
  },
  select: {
    id: true,
    post_title: true,
    images: {
      select: {
        src: true,
      },
    },
  },
});

console.log(product);s

// const result = await prisma.wishlist.create({
//   data: {
//       "product_id":2,
//       "user_id":1,
//       }
//   },
// )
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

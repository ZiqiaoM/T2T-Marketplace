// export async function getAllPoductsIds(context) {
//   // const product_ids = await prisma.product.findMany({
//   //   select: {
//   //     id: true,
//   //   },
//   // });
//   // return product_ids.map((product_id) => {
//   //   return {
//   //     params: {
//   //       id: product_id.toString(),
//   //     },
//   //   };
//   // });
//   return [
//     { params: { id: "1" } },
//     { params: { id: "2" } },
//     { params: { id: "3" } },
//     { params: { id: "4" } },
//   ];
// }
import prisma from "../lib/prisma";

// export async function getAllProductsIdst() {
//   const products = await prisma.product.findMany({ select: { id: true } });
//   return products.map((product) => {
//     return {
//       params: {
//         id: product.id.toString(),
//       },
//     };
//   });
// }

export async function getPostDetails(id) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id, 10) },
    select: {
      post_title: true,
      category_id: true,
      price: true,
      condition: true,
      location: true,
      product_details: true,
      reference_link: true,
      images: true,
    },
  });
  return product[id];
}

// lib/posts.js

export async function getPostIdList(product) {
  return [
    {
      params: {
        id: product.id.toString(),
      },
    },
  ];
}

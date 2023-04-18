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

const products = [
  {
    post_title: "Digital Alarm Clock",
    price: 9.95,
    free: false,
    condition: "New",
    location: "Off Campus",
    if_sold: true,
    seller_id: 3,
    reference_link:
      "https://www.amazon.com/Digital-Electronic-Charging-Adjustable-Brightness/dp/B091CHRBSQ/ref=sr_1_6?crid=3GE0JQB21J8YQ&keywords=electronic&qid=1681598841&sprefix=electronic%2B%2Caps%2C124&sr=8-6&th=1",
    email: "101@gamil.com",
    // free: false,
    category_name: "Electronics",
  },
  {
    post_title: "Ultra-Quiet Sonic Electric Toothbrush",
    price: 20,
    condition: "Used",
    location: "Off Campus",
    if_sold: false,
    seller_id: 2,
    reference_link:
      "https://www.amazon.com/Oclean-Ultra-Quiet-Toothbrush-Touchscreen-Rechargeable/dp/B09Y1ZFML7/ref=sr_1_4_sspa?crid=AXK74PNHCVJR&keywords=electric%2Btoothbrush&qid=1681598882&sprefix=electr%2Caps%2C119&sr=8-4-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSjZPVENRUU1LUTMxJmVuY3J5cHRlZElkPUEwNzMyNTY0MTBIVkMyWE9CWE9GNSZlbmNyeXB0ZWRBZElkPUEwNDc4MTE5Mjg1SFpUQVVYRFdBQSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1",
    email: "102@gamil.com",
    free: false,
    category_name: "Electronics",
  },
  {
    post_title: "Women's Cap Sleeve Tank Tops",
    price: 5,
    condition: "Used",
    location: "Off Campus",
    if_sold: false,
    seller_id: 1,
    reference_link:
      "https://www.amazon.com/MIROL-Womens-Sleeve-Casual-Shirts/dp/B0BP1KXD79/ref=sr_1_1_sspa?crid=WUVEKMTKQVO3&keywords=clothing&qid=1681599316&sprefix=clothing%2Caps%2C172&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNDhPNEVMNFNFTEFVJmVuY3J5cHRlZElkPUEwNTM4NTQyM0NSVkQxS1JLTDFVSSZlbmNyeXB0ZWRBZElkPUEwNTI1OTU4MTBFMThSMzFaUkxGUyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1&psc=1",
    email: "103@gamil.com",
    free: false,
    category_name: "Clothing",
  },
  {
    post_title: "2 QT Stainless Steel Sauce Pot",
    price: 0,
    condition: "Used",
    location: "Off Campus",
    if_sold: false,
    seller_id: 2,
    reference_link:
      "https://www.amazon.com/Stainless-Steel-Sauce-Pot-Scratch-resistant/dp/B08KGTVJT6/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.c8697a08-4071-4b95-a6c6-18057bcdb898%3Aamzn1.sym.c8697a08-4071-4b95-a6c6-18057bcdb898&crid=183LJCU6DPZ05&cv_ct_cx=kitchenware&keywords=kitchenware&pd_rd_i=B08KGTVJT6&pd_rd_r=e232df29-23b4-4977-bc80-05eb3568efdb&pd_rd_w=ZvA50&pd_rd_wg=8402F&pf_rd_p=c8697a08-4071-4b95-a6c6-18057bcdb898&pf_rd_r=MPJQQCT9WCCCRE4A1T2E&qid=1681599539&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=kitchenwaer%2Caps%2C114&sr=1-1-364cf978-ce2a-480a-9bb0-bdb96faa0f61-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFURTdTWUZXSFJNWkwmZW5jcnlwdGVkSWQ9QTAyODIxOTkzNEMxM0o2RFVDSkRTJmVuY3J5cHRlZEFkSWQ9QTAyNzM5NTkyRjgxOE9MQlRTUlJXJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1",
    email: "104@gamil.com",
    free: false,
    category_name: "Kitchenwares",
  },
  {
    post_title: "Hamilton Beach 2-Way 12 Cup Programmable Drip Coffee Maker",
    price: 20,
    condition: "Used",
    location: "On Campus",
    if_sold: false,
    seller_id: 4,
    reference_link:
      "https://www.amazon.com/Hamilton-Beach-49980A-Programmable-Stainless/dp/B00EI7DPPI/ref=sr_1_1_sspa?crid=2Z41FSP8NYCXO&keywords=coffee%2Bmaker&qid=1681600415&s=home-garden&sprefix=coffee%2Cgarden%2C153&sr=1-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNTU2OEdNQllGNE1XJmVuY3J5cHRlZElkPUEwMDMzNTMxM0VDMFhIRDgyMkY1MiZlbmNyeXB0ZWRBZElkPUEwNjc4OTYzM1ZPRFAyTFVPUTFRUSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1",
    email: "105@gamil.com",
    free: false,
    category_name: "Kitchenwares",
  },
  {
    post_title: "Zerifevni Round Dining Table Set",
    price: 200,
    condition: "Used",
    location: "Off Campus",
    if_sold: false,
    seller_id: 3,
    reference_link:
      "https://www.amazon.com/Zerifevni-Dining-Century-Leisure-X-Brown/dp/B0BHQ4ZPZC/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.c8697a08-4071-4b95-a6c6-18057bcdb898%3Aamzn1.sym.c8697a08-4071-4b95-a6c6-18057bcdb898&crid=2QGVWNU8TM5DN&cv_ct_cx=funiture%2Bdesign&keywords=funiture%2Bdesign&pd_rd_i=B0BHQ4ZPZC&pd_rd_r=3d601e01-e082-4a6a-bbca-aaef4bbaed4c&pd_rd_w=tRf8h&pd_rd_wg=yzMfI&pf_rd_p=c8697a08-4071-4b95-a6c6-18057bcdb898&pf_rd_r=JEX1P4CGF7P402K8H0GQ&qid=1681600474&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=funi%2Caps%2C110&sr=1-2-364cf978-ce2a-480a-9bb0-bdb96faa0f61-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVNVFNSFZGU0Y3NkUmZW5jcnlwdGVkSWQ9QTAyNDk0MzUxMEVHWFBXQlMyTkI4JmVuY3J5cHRlZEFkSWQ9QTA3MjkwOTJTRkRTRzNINkdRVUQmd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1",
    email: "106@gamil.com",
    free: false,
    category_name: "Funitures",
  },
  {
    post_title: "3-Piece Modular Modern Living Room Sofa",
    price: 100,
    condition: "Used",
    location: "Off Campus",
    if_sold: false,
    seller_id: 3,
    reference_link:
      "https://www.amazon.com/Best-Choice-Products-Convertible-Single-Seat/dp/B07P6YH7DP/ref=sr_1_46?crid=2QGVWNU8TM5DN&keywords=funiture%2Bdesign&qid=1681600474&sprefix=funi%2Caps%2C110&sr=8-46&th=1",
    email: "107@gamil.com",
    free: false,
    category_name: "Funitures",
  },
];

const images = [
  {
    src: "https://m.media-amazon.com/images/I/61RmoID7X1L._AC_SL1500_.jpg",
    product_id: 2,
  },
  {
    src: "https://m.media-amazon.com/images/I/61cTJlKfSTL._AC_SL1500_.jpg",
    product_id: 2,
  },
  {
    src: "https://m.media-amazon.com/images/I/71Zj8RfbKvL._AC_SL1500_.jpg",
    product_id: 4,
  },
  {
    src: "https://m.media-amazon.com/images/I/61vBVG1gUbL._AC_SL1500_.jpg",
    product_id: 1,
  },
  {
    src: "https://m.media-amazon.com/images/I/61s0CYHqd2L._AC_UL1500_.jpg",
    product_id: 3,
  },
  {
    src: "https://m.media-amazon.com/images/I/71D6jPasg-L._AC_SL1500_.jpg",
    product_id: 6,
  },
  {
    src: "https://m.media-amazon.com/images/I/91UuyRK0IbL._AC_SL1500_.jpg",
    product_id: 4,
  },
  {
    src: "https://m.media-amazon.com/images/I/71NVrT064fL._AC_SL1500_.jpg",
    product_id: 5,
  },
  {
    src: "https://m.media-amazon.com/images/I/813ZUkedhAL._AC_SL1500_.jpg",
    product_id: 5,
  },
  {
    src: "https://m.media-amazon.com/images/I/619RHX51OwL._AC_SL1500_.jpg",
    product_id: 6,
  },
  {
    src: "https://m.media-amazon.com/images/I/71BfsIj9PuL._AC_SL1500_.jpg",
    product_id: 7,
  },
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

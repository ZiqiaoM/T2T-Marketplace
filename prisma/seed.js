
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  let user1 = {
    seller_name: "nux",
    post_title: "apple watch",
    price: 25.5,
    if_sold :true,
    catagory: "books"
  
  }
  let user2 = {
    seller_name: "Yranchan",
    post_title: "Switch",
    price: 299.99,
    if_sold :false,
    catagory: "tech"
  }
  // const u1 = await prisma.User.create(
  //   {
  //     data:{
  //       username:"123",
  //       email:"1233344@gmail.com"
  //     }
  // }
  // )
  const u2 = await prisma.Product.create({
    data:{
      post_title:"coffee_maker",
      price: 99.0,
      if_sold :false,
      category: "tech",
      seller:{
        connectOrCreate:{
          where:{username:"antoine"},
          create:{
            username:"antoine",
            email:"asss",
          }
        }
      }
    }
  })
  

  // console.log({ u2})
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
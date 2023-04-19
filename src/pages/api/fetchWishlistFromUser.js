import prisma from '../../lib/prisma';


export default async function handle(req, res) {

  let {id} = req.body;
  const wishlistitems = await prisma.wishlist.findMany({
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
    res.json(wishlistitems);
  }
import prisma from '../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  let {data} = req.body;

//   const session = await getSession({ req });
  const result = await prisma.wishlist.create({
    data: {
        "product_id":data["product_id"],
        "user_id":data["user_id"],
        }
    },
  )
  res.json(result);
}
import prisma from '../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  let {data} = req.body;

//   const session = await getSession({ req });
  const result = await prisma.product.create({
    data: {
        "product_id":id,
        "user_id":user_id,
        }
    },
  )
  res.json(result);
}
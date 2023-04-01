// import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  let {data,ImageUrl} = req.body;
  ImageUrl = ImageUrl.map(x => {
    return ({ "src": x });
  });
  console.log(ImageUrl);
//   const session = await getSession({ req });
  const result = await prisma.product.create({
    data: {
        "post_title": data["post_title"],
        "condition": data["condition"],
        "location": data["location"],
        "price": data["price"],
        "seller_id" :data["seller_id"],
        "category_name": data["category_name"],
        "product_details": data["product_details"],
        "reference_link": data["reference_link"],
        "email" : data["email"],
        "if_sold": data["if_sold"],
        images: {
            create: ImageUrl,
        }
    },
  })
  res.json(result);
}
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const products = await prisma.product.findMany({
        select: {
            id:true,
            post_title:true,
            price: true,
            images: true,
            location: false,
            condition: true,
            category_name: true,
          },
    }      
    );
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
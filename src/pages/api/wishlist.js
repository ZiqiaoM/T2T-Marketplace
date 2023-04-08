import prisma from "../../lib/prisma";

export default async function handleWishlist(req, res) {
  if (req.method === "POST") {
    const { product } = req.body;

    try {
      const result = await prisma.wishlist.create({
        data: {
          product_id: Product.id,
          user_id: User.id,

          // Add any additional fields you want to save to the wishlist table here.
        },
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add product to wishlist." });
    }
  } else {
    res.status(400).json({ error: "Invalid request method." });
  }
}

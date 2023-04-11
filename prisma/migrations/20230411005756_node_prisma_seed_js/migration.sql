/*
  Warnings:

  - You are about to drop the column `wishlistId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `Wishlist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "wishlistId";

-- AlterTable
ALTER TABLE "Wishlist" ADD COLUMN     "product_id" INTEGER NOT NULL;

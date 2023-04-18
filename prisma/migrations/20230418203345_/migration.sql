/*
  Warnings:

  - The `free` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "free",
ADD COLUMN     "free" BOOLEAN;

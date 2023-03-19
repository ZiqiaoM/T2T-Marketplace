import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany();
  
  await prisma.$disconnect(); //Make sure to close the Prisma client instance after the query is complete
  res.json(users);
}
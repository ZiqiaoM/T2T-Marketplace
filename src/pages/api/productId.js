import prisma from '../../../lib/prisma';


export default async function handle(req, res) {

  //   const session = await getSession({ req });
  const paths = await prisma.product.findMany({
      select: {
      id: true,
      // name: true,
    },});
    res.json(paths);
  }
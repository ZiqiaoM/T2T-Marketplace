import prisma from '../../lib/prisma';



export default async function handle(req, res) {

    //   const session = await getSession({ req });
      // const result = await prisma.product.findMany();
      const product = await prisma.product.findUnique({
        where:{
          id:parseInt(params.id),
        },
        select:{
          id:true,
          post_title: true,
          category_name: true,
          price: true,
          condition: true,
          location: true,
          product_details: true,
          reference_link: true,
          phone: true,
          images: true,
        }
      }
    ); 
      res.json(result);
    }
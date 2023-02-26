export async function getAllPoductsIds(context) {
  // const product_ids = await prisma.product.findMany({
  //   select: {
  //     id: true,
  //   },
  // });
  // return product_ids.map((product_id) => {
  //   return {
  //     params: {
  //       id: product_id.toString(),
  //     },
  //   };
  // });
  return [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
    { params: { id: "4" } },
  ];
}

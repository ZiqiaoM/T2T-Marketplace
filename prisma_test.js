const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  let user1 = {
    name: "nux",
    email: "nux.com",
    password: "sasasfasfq323424fg5hhhujdHM/jLhgUCNNIJ33r21222",
  };
  let user2 = {
    name: "Yranchan",
    email: "yranchan@ad.unc.edu",
    password: "$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1Vu",
  };

  await prisma.user_sample.createMany({
    data: [user1, user2],
  });

  const userss = await prisma.user_sample.findMany();
  console.log(userss);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

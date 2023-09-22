import prisma from "../src/database";

async function checkOrCreateDefaultCustomer() {
  return await prisma.customer.upsert({
    create: {
      firstName: "Geraldo",
      lastName: "Luiz Datena",
      document: "133.245.497-60",
    },
    update: {},
    where: {
      document: "133.245.497-60",
    },
  });
}

async function main() {
  return checkOrCreateDefaultCustomer();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

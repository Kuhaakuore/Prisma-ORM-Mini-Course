import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
  const posts = await prisma.posts.findMany();
  console.log("Posts encontrados no banco:", posts);
})();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany(); // pulisce la tabella

  const initialUsers = [
    { name: "Daniele Boerio", password: "1" },
    { name: "Silvio Saccoman", password: "2" },
    { name: "Greta Predico", password: "3" },
    { name: "Andrea Zanaboni", password: "4" },
    { name: "Francesco Principe", password: "5" },
    { name: "Alessandro Danese", password: "6" },
    { name: "Francesco Salvatore Mazzitelli", password: "7" },
    { name: "Daniele Buson", password: "8" },
    { name: "Carola Brenna", password: "9" },
    { name: "Niccolò Coccia", password: "10" },
    { name: "Falco Ferraguto", password: "11" },
    { name: "Paolo Corsino", password: "12" },
    { name: "Eleonora Garretto", password: "13" },
  ];

  for (const u of initialUsers) {
    await prisma.user.create({
      data: u,
    });
  }
}

main()
  .then(() => {
    console.log("Seeding completato! 🪴");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error("Errore nel seeding:", e);
    prisma.$disconnect();
    process.exit(1);
  });

import express from "express";
import cors from "cors";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// GET: lista utenti
app.get("/service/api/utenti", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// POST: login utente
app.post("/service/api/utente", async (req, res) => {
  const { user, password } = req.body;

  try {
    // Trova l'utente
    const found = await prisma.user.findFirst({
      where: { name: user, password: password },
    });

    if (!found) {
      return res.json({ status: "Failed", user: null });
    }

    // Aggiorna participant a true
    const updatedUser = await prisma.user.update({
      where: { id: found.id },
      data: { participant: true },
    });

    const returnUser = {
      id: updatedUser.id,
      name: updatedUser.name,
      participant: updatedUser.participant,
    };

    res.json({ status: "Success", user: returnUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "Error", message: error });
  }
});

app.listen(3000, () => {
  console.log("Backend in ascolto su http://localhost:3000");
});

//npx ts-node-dev src/index.ts --respawn --transpile-only

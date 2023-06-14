const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const commande = await prisma.commande.findMany({
      include: {
        user: { select: { nom: true, prenom: true, mail: true } },
        medicament: { select: { nom: true } },
      },
    });
    res.json(commande);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const commande = req.body;
  await prisma.commande.create({ data: commande });
  res.json(commande);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await prisma.commande.delete({
      where: { numCommande: Number(id) },
    });

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete item" });
  }
});

module.exports = router;

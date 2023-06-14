const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const medicament = await prisma.medicament.findMany();
    res.json(medicament);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const medicament = req.body;
  await prisma.medicament.create({ data: medicament });
  res.json(medicament);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await prisma.medicament.delete({
      where: { idMedicament: Number(id) },
    });

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete item" });
  }
});

module.exports = router;

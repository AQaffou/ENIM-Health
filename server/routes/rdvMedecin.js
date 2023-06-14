const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


router.get("/", async (req, res) => {
  try {
    const rendezvous = await prisma.rdv.findMany();
    res.json(rendezvous);
  } catch (error) {
    console.error(error);
  }
});

router.patch("/:idRdv", async (req, res) => {

  try {
    const { idRdv } = req.params;
    const { dateVisite } = req.body;

    const updatedRendezvous = await prisma.rdv.update({
      where: { idRdv: Number(idRdv) },
      data: { dateVisite: dateVisite},
    });

    res.json(updatedRendezvous);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router

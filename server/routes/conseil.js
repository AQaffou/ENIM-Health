const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const conseil = await prisma.conseil.findMany();
    res.json(conseil);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const conseil = req.body;
  await prisma.conseil.create({ data: conseil });
  res.json(conseil);
});

module.exports = router;
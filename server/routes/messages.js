const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { validateToken } = require("../middlewares/AuthMiddleware");

const prisma = new PrismaClient();

router.get("/",validateToken, async (req, res) => {
  try {
    const messages = await prisma.messages.findMany({include: {user : {select:{ nom: true, prenom : true, }}}});
    res.json(messages);
  } catch (error) {
    console.log(error);
  }
});

// router.get('/:id', async (req, res)=>{
//     try {
//         const messages = await prisma.messages.findUnique({where : {id:{$id},},
//         include: {replies : true,}})
//         res.json(messages)
//     } catch (error) {
//         console.log(error)
//     }
// })

router.post("/",validateToken, async (req, res) => {
  const message = req.body;
  await prisma.messages.create({ data: message });
  res.json(message);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await prisma.messages.delete({
      where: { idMessage: Number(id) },
    });

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete item" });
  }
});

module.exports = router;

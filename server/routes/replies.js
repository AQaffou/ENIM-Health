const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { validateToken } = require("../middlewares/AuthMiddleware");
{
  validateToken;
}

const prisma = new PrismaClient();

router.get("/", validateToken, async (req, res) => {
  try {
    const replies = await prisma.replies.findMany();
    res.json(replies);
  } catch (error) {
    console.log(error);
  }
});

// router.get('/:messagesId', async (req, res)=>{
//     try {
//         const replies = await prisma.replies.findUnique({where : {messagesId:{$messagesId},},
//         include: {replies : true,}})
//         res.json(replies)
//     } catch (error) {
//         console.log(error)
//     }
// })

router.post("/",validateToken, async (req, res) => {
  const message = req.body;
  const username = req.user.username;
  message.username = username;
  await prisma.replies.create({ data: message });
  res.json(message);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await prisma.replies.delete({
      where: { idReply: Number(id) },
    });

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete item" });
  }
});

module.exports = router;

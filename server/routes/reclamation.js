const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client')
const {validateToken} = require('../middlewares/AuthMiddleware')
const prisma = new PrismaClient()

router.get('/',validateToken, async (req, res) => {
  try {
    const reclamations = await prisma.reclamation.findMany({include: {user : {select:{ nom: true, prenom : true, }}}});
    res.json(reclamations);
  } catch (error) {
    console.log(error);
  }
});

router.post('/',validateToken, async (req, res) => {
  const reclamation = req.body;

  
  await prisma.reclamation.create({
      data: reclamation
    });

    res.json(reclamation);
 
});

router.delete('/:id', async(req,res)=>{
  const {id} = req.params
  try {
    await prisma.reclamation.delete({
      where : { idReclamation : Number(id)}
    }).then(res.json("Item deleted successfully!"))
  } catch (error) {
    res.json(error)
  }
})

module.exports = router



const express = require('express');
const router =express.Router() ;
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/', async (req, res) => {
    try {
      const rdvs = await prisma.rdv.findMany();
      res.json(rdvs);
    } catch (error) {
     console.log(error)
      
    }
  });

router.post('/', async (req, res) => {
    const rdv = req.body;
  
    await prisma.rdv.create({
        data: rdv
      });
  
    res.json(rdv);
   
  });
  
  module.exports = router

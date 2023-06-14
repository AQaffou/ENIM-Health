const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const {validateToken}= require('../middlewares/AuthMiddleware')

const { sign } = require("jsonwebtoken");

const prisma = new PrismaClient();

router.get('/:id',async  (req, res)=>{
    try {
      const {id}=req.params
        const messages = await prisma.user.findUnique({where :{
          id : Number(id)
        } })
        res.json(messages)
    } catch (error) {
        console.log(error)
    }
})


router.post("/register", async (req, res) => {
  const { nom, prenom, cite, chambre, mail, matricule, password } = req.body;
  const user = await prisma.user.findUnique({ where: { mail: mail } });
  if (!user) {
    bcrypt.hash(password, 10).then(async (hash) => {
      await prisma.user.create({
        data: {
          nom: nom,
          prenom: prenom,
          cite: cite,
          chambre: chambre,
          mail: mail,
          matricule: matricule,
          password: hash,
        },
      });
    });
    res.json("SUCCESS");
  } else {
    res.json({error:"Il existe déjà un utilisateur avec le même nom d'utilisateur"});
  }
});

router.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  const user = await prisma.user.findUnique({ where: { mail: mail } });
  if (!user) {
    res.json({ error: "L'utilisateur n'existe pas" });
  }
  else{
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Mot de passe incorrect" });
      }
  
      const accessToken = sign(
        { mail: user.mail, id: user.id },
        "importantsecret"
      );
      res.json({ token : accessToken, id: user.id, nom : user.nom, prenom : user.prenom, cite : user.cite, chambre:user.chambre, matricule:user.matricule, role : user.role });
    });
  }
});

router.get('/auth', validateToken, (req, res)=>{
  res.json(req.user)
})

module.exports = router;

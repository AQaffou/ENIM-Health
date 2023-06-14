const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const messagesRouter = require("./routes/messages");
const repliesRouter = require("./routes/replies");
const userRouter = require("./routes/user");
const rdvRouter = require("./routes/rdv")
const reclamationRouter = require("./routes/reclamation")
const medicamentRouter = require("./routes/medicament")
const commandeRouter = require("./routes/commande")
const conseilRouter = require("./routes/conseil")
const rdvMedecinRouter = require("./routes/rdvMedecin")




app.use("/messages", messagesRouter);
app.use("/replies", repliesRouter);
app.use("/user", userRouter);
app.use("/rdv", rdvRouter)
app.use("/reclamation", reclamationRouter)
app.use("/medicament", medicamentRouter)
app.use("/commande", commandeRouter)
app.use("/conseil", conseilRouter)
app.use('/rdvMedecin',rdvMedecinRouter)



app.listen(3001, () => {
  console.log("Server running");
});

import NavbarMedecin from "./NavbarMedecin";
import axios from "axios";
import { useState } from "react";
import Footer from "../basicComponent/Footer";

export default function ReclamationsMedecin() {
  const [reclamation, setReclamation] = useState("");
  const [categorie, setCategorie] = useState("");

  const handleConfirmClick = () => {
    axios
      .post("http://localhost:3001/reclamation", {
        reclamation: reclamation,
        concerne: categorie,
      })
      .then(() => {
        alert("Reclamation envoyée avec succès!");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du conseil:", error);
      });
  };

  const handleReclamationChange = (e) => {
    setReclamation(e.target.value);
  };

  const handleCategorieChange = (e) => {
    setCategorie(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <NavbarMedecin />
      <div
        className='bg-[url("/assets/j/image_reclamations.png")] bg-cover bg-no-repeat h-screen w-screen  bg-center pt-[50px]'
        style={{
          backgroundSize: "50%", // Réduire la taille de l'image à 50%
          backgroundPosition: "RIGHT bottom", // Positionner l'image en bas à gauche
          backgroundAttachment: "fixed",
        }}
      >
        <h1
          className="font-mulish font-bold text-black text-2xl"
          style={{
            transform: "translate(600px, 100px)",
            width: "400px",
            height: "auto",
          }}
        >
          Déposez vos réclamations
        </h1>
        <form style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              transform: "translate(510px, -750px)",
              width: "500px",
              height: "150px",
              left: "-10px",
              top: "945px",
            }}
          >
            <textarea
              className="w-full h-full bg-transparent outline-none resize-none"
              placeholder="Veuillez écrire votre réclamation ici..."
              style={{
                width: "100%",
                height: "100%",
                background: "#EAF0F7",
                boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
                padding: "10px",
                boxSizing: "border-box",
                opacity: "0.8",
              }}
              value={reclamation}
              onChange={handleReclamationChange}
            />
          </div>
          <div
            style={{
              position: "absolute",
              transform: "translate(510px, -550px)",
              width: "500px",
              height: "150px",
              left: "-10px",
              top: "945px",
            }}
          >
            <select
              className="w-full h-10 mt-4 bg-white border border-gray-300 rounded-md outline-none text-gray-400"
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "4px",
                background: "#EAF0F7",
                boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
                opacity: "0.8",
              }}
              value={categorie}
              onChange={handleCategorieChange}
            >
              <option value="" disabled>
                Votre réclamation concerne qui ?
              </option>
              <option value="medecin">Médecin</option>
              <option value="bureau">Bureau AEENIM</option>
            </select>
          </div>
          <button
            className="mt-7 absolute left-941 top-1078 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
            style={{
              transform: "translate(500px,500px)",
              width: "500px",
              height: "45px",
              boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)",
              borderRadius: "10px",
            }}
            onClick={handleConfirmClick}
          >
            Confirmer
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

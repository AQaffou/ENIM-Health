import NavbarEtudiant from "./NavbarEtudiant";
import React, { useContext } from "react";
import axios from "axios";
import { AuthContexts } from "../helpers/AuthContexts";

export default function ReclamationsEtudiant() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [reclamation, setReclamation] = React.useState("");
  const [categorie, setCategorie] = React.useState("");
  const { authState } = useContext(AuthContexts);

  if (!authState.status) {
    return (
      <>
        <div>User not logged in</div>
      </>
    );
  }

  const handleConfirmClick = () => {
    if (reclamation !== "" && categorie !== "") {
      axios
        .post("http://localhost:3001/reclamation", {
          reclamation: reclamation,
          concerne: categorie,
        })
        .catch((error) => {
          console.error(error);
        });
      setShowPopup(true);
    } else {
      setErrorMessage("Veuillez remplir tous les champs requis");
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleReclamationChange = (e) => {
    setReclamation(e.target.value);
  };

  const handleCategorieChange = (e) => {
    setCategorie(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div
      className='bg-[url("../assets/reclamation/image_reclamations.png")] bg-cover bg-no-repeat h-screen w-screen bg-contain bg-center'
      style={{
        backgroundSize: "50%", // Réduire la taille de l'image à 50%

        backgroundPosition: "RIGHT bottom", // Positionner l'image en bas à gauche
        backgroundAttachment: "fixed",
      }}
    >
      <NavbarEtudiant />

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

        {errorMessage && (
          <p
            className="text-red-500 text-center mt-7 absolute top-24 font-bold  left-1/2 transform -translate-x-1/2"
            style={{ transform: "translate(-57%, 0)" }}
          >
            {errorMessage}
          </p>
        )}

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

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md text-center">
            <h2 className="text-lg font-bold mb-4">Dépos de réclamation</h2>
            <p>Votre réclamation a été renvoyée avec succès</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 mx-auto"
              onClick={handlePopupClose}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

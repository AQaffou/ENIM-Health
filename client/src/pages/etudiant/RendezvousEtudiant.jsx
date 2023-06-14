import CalendrierEtudiant from "../rdvComponents/CalendrierEtudiant";
import Navbar from "./NavbarEtudiant";
import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContexts } from "../helpers/AuthContexts";

export default function Rdv() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [showPopup, setShowPopup] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [raison, setRaison] = React.useState("");
  const [render, setRender] = useState(0);

  const { authState } = useContext(AuthContexts);

  if (!authState.status) {
    return (
      <>
        <div>User not logged in</div>
      </>
    );
  }

  const handleConfirmClick = () => {
    if (validateInputs()) {
      axios
        .post("http://localhost:3001/rdv", {
          raisonVisite: raison,
          dateVisite: selectedDate,
          typeConsultation: selectedOption,
          rdvUserId: authState.id,
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
    setRender(render + 1);
    setSelectedDate(null);
    setRaison("");
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  const handleTextareaChange = (text) => {
    setRaison(text.target.value);
    console.log(text.target.value);
  };

  const validateInputs = () => {
    if (raison === "" || selectedDate === null || selectedOption === "") {
      return false;
    }

    return true;
  };

  return (
    <div>
      <Navbar />

      <h1
        className="font-mulish font-bold text-black text-2xl "
        style={{
          transform: "translate(600px, 5px)",
          width: "400px",
          height: "auto",
        }}
      >
        Prendre Un Rendez-Vous
      </h1>

      {errorMessage && !showPopup && (
        <p
          className="text-red-500 text-center mt-10 absolute top-24 font-bold left-1/2 transform -translate-x-1/2"
          style={{ transform: "translate(-59%, 0)" }}
        >
          {errorMessage}
        </p>
      )}

      <img
        src="../assets/Vector.png"
        alt="Vecteur"
        className="absolute"
        style={{
          transform: "translate(0px,0px)",
          width: "600px",
          height: "400px",
        }}
      />
      <img
        src="../assets/rendez_vous/image_rendez_vous.png"
        alt="rdv-img"
        className="relative z-20"
        style={{
          transform: "translate(150px, 100px)",
          width: "350px",
          height: "auto",
        }}
      />

      <img
        src="../assets/rendez_vous/element.png"
        alt="rdv-img"
        className="relative"
        style={{
          transform: "translate(-20px, -280px)",
          width: "100px",
          height: "auto",
        }}
      />

      <img
        src="../assets/rendez_vous/element.png"
        alt="rdv-img"
        className="absolute"
        style={{
          transform: "translate(1420px, -230px)",
          width: "100px",
          height: "auto",
        }}
      />

      <CalendrierEtudiant
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />

      <div
        className="absolute p-4"
        style={{
          transform: "translate(100px, -420px)",
          width: "500px",
          height: "150px",
          left: "-10px",
          top: "945px",
          background: "white",
          boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.25)",
          borderRadius: "8px",
        }}
      >
        <textarea
          className="w-full h-full bg-transparent outline-none resize-none"
          placeholder="Quelle est la raison de votre visite?"
          onChange={handleTextareaChange}
          value={raison}
          required
        />
      </div>

      <div
        className="absolute"
        style={{
          transform: "translate(895px,-29px)",
          width: "400px",
          height: "auto",
        }}
      >
        <p className="font-mulish font-bold text-black text-xl mt-20">
          Consultation:
        </p>

        <div className="mt-7 flex font-mulish text-black">
          <div className="flex items-center ml-4 mr-4">
            <input
              type="radio"
              value="cabinet"
              name="consultation"
              className="w-4 h-4 mr-3"
              checked={selectedOption === "cabinet"}
              onChange={handleRadioChange}
            />
            <label className={selectedOption === "cabinet" ? "font-bold" : ""}>
              Au Cabinet
            </label>
          </div>

          <div className="flex items-center ml-8 mr-4">
            <input
              type="radio"
              value="domicile"
              name="consultation"
              className="w-4 h-4 mr-3"
              checked={selectedOption === "domicile"}
              onChange={handleRadioChange}
            />
            <label className={selectedOption === "domicile" ? "font-bold" : ""}>
              A Domicile
            </label>
          </div>
        </div>

        <button
          className="mt-7 absolute left-941 top-1078 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          style={{
            width: "300px",
            height: "45px",
            boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)",
            borderRadius: "10px",
          }}
          onClick={handleConfirmClick}
        >
          Confirmer
        </button>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md text-center">
            <h2 className="text-lg font-bold mb-4">Demande de Rendez-vous</h2>
            <p>Votre demande de rendez-vous a été renvoyée avec succès</p>
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

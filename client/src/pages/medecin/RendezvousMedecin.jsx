import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContexts } from "../helpers/AuthContexts";
import NavbarMedecin from "./NavbarMedecin";
import CalendrierMedecin from "../rdvComponents/CalendrierMedecin";

function RendezvousMedecin() {
  const [rendezvous, setRendezvous] = useState([]);
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const { authState } = useContext(AuthContexts);
  console.log(authState);

  const handleConfirmClick = (rendezvousItem) => {
    
    if (selectedDate){
      axios
        .patch(`http://localhost:3001/rdvMedecin/${rendezvousItem.idRdv}`, {
          dateVisite: selectedDate,
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
    
  };

 

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/rdvMedecin")
      .then((response) => {
        setRendezvous(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NavbarMedecin />
      <img
        src="../assets/rendez_vous/image_rendez_vous.png"
        alt="rdv-img"
        className="relative z-20"
        style={{
          transform: "translate(0px, 100px)",
          float: "right",
          width: "350px",
          height: "auto",
        }}
      />
      <img
        src="../assets/rendez_vous/element.png"
        alt="rdv-img"
        className="absolute"
        style={{
          transform: "translate(0px, 30px)",
          width: "100px",
          height: "auto",
        }}
      />

      <img
        src="../assets/rendez_vous/element.png"
        alt="rdv-img"
        className="relative"
        style={{
          transform: "translate(350px, 30px)",
          float: "right",
          width: "100px",
          height: "auto",
        }}
      />
      <img
        src="../assets/rendez_vous/element.png"
        alt="rdv-img"
        className="relative"
        style={{
          transform: "translate(410px, 400px)",
          float: "right",
          width: "100px",
          height: "auto",
        }}
      />

      <h1
        className="font-mulish font-bold text-black text-2xl"
        style={{
          transform: "translate(600px, 10px)",
          width: "400px",
          height: "auto",
        }}
      >
        Liste des rendez-vous
      </h1>

      <div
        className="grid gap-4 pt-10"
        style={{
          transform: "translate(450px, 10px)",
          width: "550px",
          height: rendezvous.length > 3 ? "450px" : "auto",
          overflowY: rendezvous.length > 3 ? "scroll" : "hidden",
        }}
      >
        {rendezvous.map((rendezvousItem) => {
          return (
            <div key={rendezvousItem.idRdv} className="bg-gray-100 p-4 rounded shadow relative">
              <div>
                <p>Date : {rendezvousItem.dateVisite}</p>
                <p>Consultation : {rendezvousItem.typeConsultation}</p>
                <p>Raison de visite : {rendezvousItem.raisonVisite}</p>
               
              </div>
              <div className="absolute bottom-2 right-0">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white rounded mr-3"
                  style={{
                    width: "100px",
                    height: "30px",
                    borderRadius: "10px",
                  }}
                  onClick={() => setShowConfirmationPopup(true)}
                >
                  Valider
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white rounded mr-3"
                  style={{
                    width: "100px",
                    height: "30px",
                    borderRadius: "10px",
                  }}
                  onClick={() => {
                    setShowDatePopup(true);
                  }}
                >
                  Décaler
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showDatePopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div
            className="bg-white p-4 rounded-md text-center"
            style={{ background: "#F0F9FD", width: "500px", height: "500px", borderRadius: "8px" }}
          >
            <h3 className="text-lg font-bold mb-4">Choisissez une date</h3>
            <div
              style={{
                transform: "translate(-820px, 320px)",
                width: "300px",
                height: "50px",
              }}
            >
              <CalendrierMedecin selectedDate={selectedDate} onDateChange={handleDateSelection} />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 mx-auto mr-10"
              style={{
                transform: "translate(0px, 280px)",
                width: "100px",
                height: "40px",
              }}
              onClick={() => setShowDatePopup(false)}
              
            >
              Valider
            </button>

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4 mx-auto"
              style={{ transform: "translate(0px, 280px)", width: "100px", height: "40px" }}
              onClick={() => setShowDatePopup(false)}
            >
              Non
            </button>
          </div>
        </div>
      )}

      {showConfirmationPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div
            className="bg-white p-4 rounded-md text-center"
            style={{ background: "#F0F9FD", width: "500px", height: "200px", borderRadius: "8px" }}
          >
            <h3 className="text-lg font-bold mb-4">Êtes-vous sûr ?</h3>
            <p>Voulez-vous vraiment valider ce rendez-vous ?</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-6 mx-auto mr-10"
              style={{ transform: "translate(0px, 20px)", width: "100px", height: "40px" }}
              onClick={() => setShowConfirmationPopup(false)}
            >
              Non
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 mx-auto"
              style={{ transform: "translate(0px, 20px)", width: "100px", height: "40px" }}
              onClick={() => setShowConfirmationPopup(false)}
            >
              Oui
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RendezvousMedecin;

import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarMedecin from "./NavbarMedecin";

function Conseils() {
  const [listeConseils, setListeConseils] = useState([]);
  const [conseil, setConseil] = useState("");
  const [nouveauConseil, setNouveauConseil] = useState("");

  useEffect(() => {
    async function fetchConseils() {
      try {
        const response = await axios.get("http://localhost:3001/conseil");
        const conseilData = response.data;
        setListeConseils(conseilData);
        console.log(conseilData);
      } catch (error) {
        console.error("Erreur lors de la récupération des conseils:", error);
      }
    }
    fetchConseils();
  }, []);

  const handleConseilChange = (event) => {
    setConseil(event.target.value);
  };

  const handleClickConseil = () => {
    if (conseil.trim() !== "") {
      axios
        .post("http://localhost:3001/conseil", { conseil: conseil })
        .then(() => {
          console.log("Le conseil est sauvegardé dans la base de données");
          setConseil("");
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi du conseil:", error);
        });
    }
  };

  const ajouterConseil = () => {
    if (nouveauConseil.trim() !== "") {
      axios
        .post("http://localhost:3001/conseil", { conseil: nouveauConseil })
        .then((response) => {
          const nouveauConseilServeur = response.data;
          setListeConseils([...listeConseils, nouveauConseilServeur]);
          setNouveauConseil("");
          console.log("Le conseil est sauvegardé dans la base de données");
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi du conseil:", error);
        });
    }
  };

  const conseilsParLigne = 3;
  const lignesDeConseils =
    listeConseils.length > 0
      ? Array.from(
          { length: Math.ceil(listeConseils.length / conseilsParLigne) },
          (_, index) =>
            listeConseils.slice(
              index * conseilsParLigne,
              index * conseilsParLigne + conseilsParLigne
            )
        )
      : [];

  return (
    <>
      <div className="px-36">
        <NavbarMedecin />
        <h1 className="text-center text-xl font-semibold pt-20 pb-10">
          Quelques Conseils De Santé
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 p-11 bg-contain w-screen h-screen bg-center bg-no-repeat bg-[url('/assets/conseils/image_conseils.png')]">
        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
          {lignesDeConseils.map((ligne, index) => (
            <div key={index} className="flex w-[90%] justify-around mb-36">
              {ligne.map((conseil, i) => (
                <section
                  key={i}
                  className="rounded-xl py-6 px-4 text-[14px] font-semibold h-36 w-[300px] shadow bg-white mx-4"
                >
                  {conseil.conseil}
                </section>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-12">
        <div className="flex items-center rounded-2xl px-4 py-2 bg-blue-100 w-96">
          <input
            type="text"
            placeholder="Ajouter un conseil"
            className="bg-transparent outline-none px-2"
            value={nouveauConseil}
            onChange={(e) => setNouveauConseil(e.target.value)}
          />
          <img
            src="/assets/conseils/ic_baseline-plus.svg"
            alt="icon"
            className="cursor-pointer ml-[130px]"
            onClick={ajouterConseil}
          />
        </div>
      </div>
    </>
  );
}

export default Conseils;

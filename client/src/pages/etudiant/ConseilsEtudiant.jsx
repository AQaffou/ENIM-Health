import { useState, useEffect } from "react";
import axios from "axios";
import NavbarEtudiant from "./NavbarEtudiant";
import { AuthContexts } from "../helpers/AuthContexts";
import { useContext } from "react";
function ConseilsEtudiant() {
  const [listeConseils, setListeConseils] = useState([]);

  useEffect(() => {
    async function fetchConseils() {
      try {
        const response = await axios.get("http://localhost:3001/conseil");
        const conseils = response.data;
        setListeConseils(conseils);
      } catch (error) {
        console.error("Erreur lors de la récupération des conseils:", error);
      }
    }
    fetchConseils();
  }, []);
  const { authState } = useContext(AuthContexts);
  if (!authState.status) {
    return (
      <>
        <div>User not logged in</div>
      </>
    );
  }

  return (
    <>
      <NavbarEtudiant />
      <div className="">
        <div className="px-36">
          <h1 className="text-center text-xl font-semibold pt-20 pb-10">
            Liste des Conseils
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 p-11 bg-contain w-screen h-screen bg-center bg-no-repeat bg-[url('/assets/conseils/image_conseils.png')]">
          <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
            <ul className="flex flex-wrap justify-center">
              {listeConseils.map((conseil) => (
                <li
                  key={conseil.idConseil}
                  className="rounded-xl py-6 px-4 text-[14px] font-semibold h-36 w-[300px] shadow bg-white mx-4 my-4"
                >
                  {conseil.conseil}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConseilsEtudiant;

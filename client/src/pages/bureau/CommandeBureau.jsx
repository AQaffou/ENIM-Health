import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContexts } from "../helpers/AuthContexts";

import NavbarBureau from "./NavbarBureau";
import Footer from "../basicComponent/Footer";

function CommandeBureau() {
  const [commande, setCommande] = useState([]);

  const { authState } = useContext(AuthContexts);

  console.log(authState);

  useEffect(() => {
    axios
      .get("http://localhost:3001/commande")
      .then((response) => {
        setCommande(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleValidation = async (numCommande) => {
    try {
      const response = await axios.post("http://localhost:3001/commande", {
        numCommande,
      });
      console.log("Commande effectuée avec succès", response.data);
    } catch (error) {
      console.error("Erreur lors de la commande :", error);
    }
  };
  const handleRefus = async (numCommande) => {
    try {
      const response = await axios.post("http://localhost:3001/commande", {
        numCommande,
      });
      console.log("Commande effectuée avec succès", response.data);
    } catch (error) {
      console.error("Erreur lors de la commande :", error);
    }
  };

  return (
    <>
      <NavbarBureau />
      <div className="flex">
        <div className="py-[150px] font-[Mulish] ">
          <div className=" flex flex-col gap-y-[40px] pt-10 w-[750px] pl-[180px] bg-[url('/assets/landing_page/element.png')] bg-no-repeat">
            {commande.map(({ user, numCommande, medicament }) => {
              return (
                <div
                  key={numCommande}
                  className="bg-white p-[30px] rounded shadow-[0px_-1px_9px_rgba(0,0,0,0.25)] "
                >
                  <div className="text-black">
                    <p className="font-[300] mb-[20px]">{user.mail}</p>
                    <p className="font-bold">
                      Etudiant :{" "}
                      <span className="font-light">
                        {user.nom} {user.prenom}
                      </span>
                    </p>
                    <p className="font-bold">
                      Médicament :{" "}
                      {/* <span className="font-light">{medicament.nom}</span>{" "} */}
                    </p>
                    <p className="font-bold">
                      Numéro de commande :{" "}
                      <span className="font-light">{numCommande}</span>
                    </p>
                  </div>
                  <div className="flex justify-end pt-5">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded mr-3"
                      style={{
                        width: "100px",
                        height: "30px",
                        borderRadius: "10px",
                      }}
                      onClick={handleValidation}
                    >
                      Accepter
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white rounded mr-3"
                      style={{
                        width: "100px",
                        height: "30px",
                        borderRadius: "10px",
                      }}
                      onClick={handleRefus}
                    >
                      Refuser
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-screen mt-[100px] w-[50%] ">
          <div className="h-[150px] mb-[200px] pt-[150px] bg-[url('/assets/landing_page/element.svg')] bg-no-repeat bg-[center_right_2rem]"></div>
          <div className="h-[400px] mb-[100px] bg-[url('/assets/rendez_vous/image_rendez_vous.png')] bg-no-repeat bg-[center_right_2rem]"></div>
          <div className="h-[150px] pt-[150px] bg-[url('/assets/landing_page/element.svg')] bg-no-repeat bg-[center_left_2rem]"></div>
        </div>
      </div>
      <div className="h-[150px] bg-[url('/assets/landing_page/element.svg')] bg-no-repeat bg-[center_right_2rem]"></div>
      <Footer />
    </>
  );
}
export default CommandeBureau;

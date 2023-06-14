import NavbarBureau from "./NavbarBureau";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../basicComponent/Footer";

function ReclamationsBureau() {
  const [reclamations, setReclamations] = useState([]);
  const [render, setRender] = useState(0);
  useEffect(() => {
    async function fetchReclamationsBureau() {
      try {
        await axios
          .get("http://localhost:3001/reclamation", {
            headers: { accessToken: localStorage.getItem("accessToken") },
          })
          .then((response) => {
            const data = response.data;
            setReclamations(data);
          });
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des réclamations:",
          error
        );
      }
    }
    fetchReclamationsBureau();
  }, [render]);

  const handleDelete = (idReclamation) => {
    axios
      .delete(`http://localhost:3001/reclamation/${idReclamation}`)
      .then(setRender(render + 1));
  };

  return (
    <>
      <NavbarBureau />
      <div
        className="bg-cover bg-center bg-no-repeat relative h-screen w-auto bottom-0 right-0"
        style={{
          backgroundImage: `url('../assets/reclamations/image_reclamations.png')`,
          backgroundPosition: "bottom right",
          backgroundSize: "60%",
        }}
      >
        <div className="flex justify-center items-center h-screen flex-col  ">
          <div className="overflow-auto">
            {reclamations.map(
              ({ idReclamation, reclamation, concerne, user }) => (
                <div
                  key={idReclamation}
                  className="flex-row bg-gray-200 bg-opacity-80 h-42 w-96 p-3 mb-4 "
                >
                  <div className="flex items-baseline">
                    <h6 className="pb-8">
                      {user.nom} {user.prenom}
                    </h6>
                  </div>
                  <div className="flex flex-col">
                    <p className="pb-8 font-bold">
                      Réclamation visée: {concerne}
                    </p>
                    <p className="font-bold">Réclamation: {reclamation}</p>
                  </div>
                  <button
                    className="flex justify-end bg-blue-400 px-2 py-1 mt-2 rounded-md text-gray-50 hover:bg-white-100 "
                    onClick={() => handleDelete(idReclamation)}
                  >
                    Delete
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReclamationsBureau;

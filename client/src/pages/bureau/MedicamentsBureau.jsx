import { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavbarBureau from "./NavbarBureau";
import Footer from "../basicComponent/Footer";

import { AuthContexts } from "../helpers/AuthContexts";

function MedicamentsBureau() {
  const [medicament, setMedicament] = useState([]);
  const { authState } = useContext(AuthContexts);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupTwo, setShowPopupTwo] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [render, setRender] = useState(0);

  useEffect(() => {
    async function fetchMedicament() {
      try {
        const response = await axios.get("http://localhost:3001/medicament");
        const medicamentData = response.data;
        setMedicament(medicamentData);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des médicaments :",
          error
        );
      }
    }
    fetchMedicament();
  }, [render]);

  if (!authState.status) {
    return (
      <>
        <div>User not logged in</div>
      </>
    );
  }

  const handleDelete = async (idMedicament) => {
    await axios
      .delete(`http://localhost:3001/medicament/${idMedicament}`)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          console.log("Commande effectuée avec succès", response.data);
          setShowPopupTwo(true);
          setRender(render + 1);
        }
      });
  };

  const handleAdd = async () => {
    await axios
      .post("http://localhost:3001/medicament", {
        nom: nom,
        description: description,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          console.log(response);
          alert("Ce médicament est ajouté avec succès !");
          setShowPopup(false);
          handlePopupClose();
          setRender(render + 1);
          setDescription("");
          setNom("");
        }
      });
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSearchValue("");
    setSearchResults(medicament);
    setDescription("");
    setNom("");
  };

  const handlePopupTwoClose = () => {
    setShowPopupTwo(false);
    setSearchValue("");
    setSearchResults(medicament);
  };

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const filteredItems = medicament.filter((item) =>
      item.nom.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredItems);
  };
  return (
    <>
      <NavbarBureau />
      <div className="font-[Mulish] pt-[170px] ">
        <div className="flex justify-center text-xs bg-[url('/assets/landing_page/element.png')] bg-no-repeat h-[150px]">
          <div className="flex w-[1500px] h-fit items-center justify-around ">
            <button
              className="bg-[#28DA8F] rounded-3xl text-white text-[15px] font-bold h-10 w-[150px] outline-0 border-white hover:bg-white hover:text-[#28DA8F] hover:border-2 hover:border-[#28DA8F] transition-all"
              onClick={handlePopupOpen}
            >
              Ajouter
            </button>
            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white px-[40px] py-[30px] rounded-md text-center h-[400px] w-[400px] flex flex-col justify-around items-center">
                  <input
                    className="bg-[#EAF0F7] h-[50px] focus:outline-0 pl-2 rounded-xl w-[80%] border-[#b4c3d532] border-2"
                    placeholder="Nom du médicament"
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                  <input
                    className="bg-[#EAF0F7] h-[50px] focus:outline-0 pl-2 rounded-xl w-[80%] border-[#b4c3d532] border-2"
                    placeholder="Description du médicament"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div className="flex justify-around w-[70%]">
                    <button
                      className="bg-[#28DA8F]  text-white font-bold py-3 px-6 rounded-full mt-6 mx-auto text-[15px] outline-0  hover:bg-[#0ba967] hover:text-white"
                      onClick={handleAdd}
                    >
                      Ajouter
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-6 mx-auto text-[15px]"
                      onClick={handlePopupClose}
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="relative flex items-center">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearch}
                placeholder="Rechercher..."
                className="bg-[#EAF0F7] border-2 border-[#b4c3d532] text-[#00000] text-[15px] px-4 py-2 rounded-full w-[400px] h-[50px] outline-0"
              />
              <img
                src="/assets/Vector.svg"
                className="h-fit w-6 right-[15px] absolute"
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-wrap gap-x-[150px] gap-y-[100px] pl-[100px] pr-[100px] justify-center bg-[url('/assets/landing_page/Vector.png')] bg-[left_top_12%] bg-no-repeat bg-[length:800px_600px]">
          {searchValue === "" ? (
            <div className="w-[100%] flex flex-wrap gap-x-[150px] gap-y-[100px] pl-[100px] pr-[100px] justify-center">
              {medicament.map(({ idMedicament, nom, description }) => (
                <div
                  key={idMedicament}
                  className="w-[250px] h-[270px] drop-shadow-[0px_-1px_9px_rgba(0,0,0,0.25)] bg-white rounded-2xl flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                >
                  <h1 className="pb-8 text-[20px] font-[700] ">{nom}</h1>
                  <p className="pb-8 px-[25px] text-[#7D7987] font-light text-[14px] text-center">
                    {description}
                  </p>
                  <button
                    className="bg-[#F64545] rounded-3xl text-white text-[13px] h-10 w-[150px] outline-0 border-white hover:bg-white hover:text-[#F64545] hover:border-2 hover:border-[#F64545] transition-all"
                    onClick={() => handleDelete(idMedicament)}
                  >
                    Supprimer
                  </button>
                </div>
              ))}
              {showPopupTwo && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                  <div className="bg-white px-[40px] py-[30px] rounded-md text-center">
                    <h2 className="text-lg font-bold mb-4">
                      Supression du médicament
                    </h2>
                    <p>
                      Supression avec succès!<br></br>{" "}
                    </p>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 mx-auto"
                      onClick={handlePopupTwoClose}
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div
                key={item.idMedicament}
                className="w-[250px] h-[270px] drop-shadow-[0px_-1px_9px_rgba(0,0,0,0.25)] bg-white rounded-2xl flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
              >
                <h1 className="pb-8 text-[20px] font-[700] ">{item.nom}</h1>
                <p className="pb-8 px-[25px] text-[#7D7987] font-light text-[14px] text-center">
                  {item.description}
                </p>
                <button
                  className="bg-[#F64545] rounded-3xl text-white text-[13px] h-10 w-[150px] outline-0 border-white hover:bg-white hover:text-[#F64545] hover:border-2 hover:border-[#F64545] transition-all"
                  onClick={() => handleDelete(item.idMedicament)}
                >
                  Supprimer
                </button>
              </div>
            ))
          ) : (
            <p className="text-red-500 font-bold">
              Médicament recherché est introuvable !
            </p>
          )}
        </div>
        {showPopupTwo && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white px-[40px] py-[30px] rounded-md text-center">
              <h2 className="text-lg font-bold mb-4">
                Supression du médicament
              </h2>
              <p>
                Supression avec succès!<br></br>{" "}
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 mx-auto"
                onClick={handlePopupTwoClose}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="h-[150px] bg-[url('/assets/landing_page/element.svg')] bg-no-repeat bg-[center_right_2rem]"></div>
      <Footer />
    </>
  );
}

export default MedicamentsBureau;

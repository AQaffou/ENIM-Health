import { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavbarMedecin from "./NavbarMedecin";
import Footer from "../basicComponent/Footer";

import { AuthContexts } from "../helpers/AuthContexts";

function MedicamentsMedecin() {
  const [medicament, setMedicament] = useState([]);
  const { authState } = useContext(AuthContexts);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
  }, []);

  if (!authState.status) {
    return (
      <>
        <div>User not logged in</div>
      </>
    );
  }

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
      <NavbarMedecin />
      <div className="font-[Mulish] pt-[170px] ">
        <div className="flex justify-center text-xs bg-[url('/assets/landing_page/element.png')] bg-no-repeat h-[150px]">
          <div className="flex w-[1000px h-fit items-center justify-center relative">
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
                </div>
              ))}
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
              </div>
            ))
          ) : (
            <p className="text-red-500 font-bold">
              Médicament recherché est introuvable !
            </p>
          )}
        </div>
      </div>
      <div className="h-[150px] bg-[url('/assets/landing_page/element.svg')] bg-no-repeat bg-[center_right_2rem]"></div>
      <Footer />
    </>
  );
}

export default MedicamentsMedecin;

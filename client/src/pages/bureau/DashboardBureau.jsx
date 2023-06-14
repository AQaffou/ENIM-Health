import NavbarBureau from "./NavbarBureau";
import Footer from "../basicComponent/Footer";
import { useNavigate } from "react-router-dom";

function DashboardBureau() {
  const navigateTo = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <NavbarBureau />
        <div className="p-14">
          <h1 className="font-bold text-xl pb-[40px] pt-[120px]">Bienvenue!</h1>
        </div>
        <div className="flex flex-wrap gap-[80px] w-[50%] justify-center mb-[120px]">
          <button
            className="h-[250px] w-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl"
            onClick={() => navigateTo("/dashboardbureau/medicamentsbureau")}
          >
            <img
              src="..\assets\dashboard\icone_medicaments.png"
              alt="icon"
              className="w-20 "
            />
            <div className="font-bold pt-4">Médicaments</div>
          </button>
          <button
            className="h-[250px] w-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl"
            onClick={() => navigateTo("/dashboardbureau/reclamationsbureau")}
          >
            <img
              src="..\assets\dashboard\icone_reclamations.png"
              alt="icon"
              className="w-20 "
            />
            <div className="font-bold pt-4">Réclamations</div>
          </button>
          <button
            className="h-[250px] w-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl"
            onClick={() => navigateTo("/dashboardbureau/commandebureau")}
          >
            <img
              src="..\assets\dashboard\icone_reclamations.png"
              alt="icon"
              className="w-20 "
            />
            <div className="font-bold pt-4">Commandes</div>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DashboardBureau;

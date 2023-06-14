import NavbarMedecin from "./NavbarMedecin";
import Footer from "../basicComponent/Footer";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigateTo = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <NavbarMedecin />
        <div className="p-14">
          <h1 className="font-bold text-xl pb-[40px] pt-[120px]">Bienvenue!</h1>
        </div>
        <div className="flex flex-wrap gap-[80px] w-[50%] justify-center mb-[120px]">
          <button
            className="h-[250px] w-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col  items-center rounded-xl"
            onClick={() => navigateTo("/dashboardmedecin/rendezvousmedecin")}
          >
            <img
              src="..\assets\dashboard\icone_rendez_vous.png"
              alt="icon"
              className="w-20 "
            />
            <div className="font-bold pt-4">Rendez-vous</div>
          </button>
          <button
            className="h-[250px] w-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl"
            onClick={() => navigateTo("/dashboardmedecin/medicamentsmedecin")}
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
            onClick={() => navigateTo("/dashboardmedecin/conseilsmedecin")}
          >
            <img
              src="..\assets\dashboard\icone_conseils.png"
              alt="icon"
              className="w-20 "
            />
            <div className="font-bold pt-4">Conseils</div>
          </button>
          <button
            className="h-[250px] w-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl"
            onClick={() => navigateTo("/dashboardmedecin/forummedecin")}
          >
            <img
              src="../assets/dashboard/icone_forum.png"
              alt="icon"
              className="w-20 "
            />
            <div className="font-bold pt-4">Forum</div>
          </button>
          <button
            className="h-[250px] w-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl"
            onClick={() => navigateTo("/dashboardmedecin/reclamationsmedecin")}
          >
            <img
              src="..\assets\dashboard\icone_reclamations.png"
              alt="icon"
              className="w-20 "
            />
            <div className="font-bold pt-4">Réclamations</div>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;

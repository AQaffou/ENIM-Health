import NavbarEtudiant from "./NavbarEtudiant";
import Footer from "../basicComponent/Footer";
// import { AuthContexts } from "../helpers/AuthContexts";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  // const { authState } = useContext(AuthContexts);
  const navigateTo = useNavigate();
  // if (!authState.status) {
  //   return (
  //     <>
  //       <div>User not logged in</div>
  //     </>
  //   );
  // }
  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <NavbarEtudiant />
        <div className="p-14">
          <h1 className="font-bold text-xl pb-24">Bienvenue!</h1>
        </div>
        <div className="flex justify-center ">
          <button
            className="h-44 w-44 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col  items-center rounded-xl mr-4"
            onClick={() => navigateTo("/dashboardetudiant/rendezvousetudiant")}
          >
            <img
              src="..\assets\dashboard\icone_rendez_vous.png"
              alt="icon"
              className="h-24 w-20 "
            />
            <div className="font-bold pt-4">Rendez-vous</div>
          </button>
          <button
            className="h-44 w-44 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl mr-4"
            onClick={() => navigateTo("/dashboardetudiant/medicamentsetudiant")}
          >
            <img
              src="..\assets\dashboard\icone_medicaments.png"
              alt="icon"
              className="h-24 w-20 "
            />
            <div className="font-bold pt-4">Médicaments</div>
          </button>
          <button
            className="h-44 w-44 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl"
            onClick={() => navigateTo("/dashboardetudiant/coneilsetudiant")}
          >
            <img
              src="..\assets\dashboard\icone_conseils.png"
              alt="icon"
              className="h-24 w-20 "
            />
            <div className="font-bold pt-4">Conseils</div>
          </button>
        </div>
        <div className="flex justify-center pt-20 pb-20">
          <button
            className="h-44 w-44 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl mr-4"
            onClick={() => navigateTo("/dashboardetudiant/forumetudiant")}
          >
            <img
              src="../assets/dashboard/icone_forum.png"
              alt="icon"
              className="h-24 w-20 "
            />
            <div className="font-bold pt-4">Forum</div>
          </button>
          <button
            className="h-44 w-44 shadow-[0px_-1px_19px_rgba(0,0,0,0.30)] justify-center flex flex-col items-center rounded-xl mr-4"
            onClick={() =>
              navigateTo("/dashboardetudiant/reclamationsetudiant")
            }
          >
            <img
              src="..\assets\dashboard\icone_reclamations.png"
              alt="icon"
              className="h-24 w-20 "
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

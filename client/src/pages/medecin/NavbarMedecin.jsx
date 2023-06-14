import { Link } from "react-router-dom";
import LogoutButton from "../basicComponent/LogoutButton";

function NavbarMedecin() {
  return (
    <>
      <div className="fixed w-screen flex  bg-white z-10 items-center justify-between px-40 py-6 drop-shadow-sm">
        <div className="flex items-center">
          <img className="mr-2 w-" src="../assets/Logo.png" alt="Logo" />
          <h1 className="font-main font-bold text-2xl text-logo-text">
            EnimHealth
          </h1>
        </div>
        <nav className="flex font-main font-normal text-light-grey">
          <Link
            to="/dashboardmedecin/rendezvousmedecin"
            className="w-40 flex justify-center  delay-1 transition-all delay-1 hover:font-bold hover:text-logo-text"
          >
            Rendez-vous
          </Link>
          <Link
            to="/dashboardmedecin/medicamentsmedecin"
            className="w-40 flex justify-center transition-all delay-1 hover:font-bold hover:text-logo-text"
          >
            Médicaments
          </Link>
          <Link
            to="/dashboardmedecin/conseilsmedecin"
            className="w-40 flex justify-center transition-all delay-1 hover:font-bold hover:text-logo-text"
          >
            Conseils
          </Link>{" "}
          <Link
            to="/dashboardmedecin/forummedecin"
            className="w-40 flex justify-center transition-all delay-1 hover:font-bold hover:text-logo-text"
          >
            Forum
          </Link>
          <Link
            to="/dashboardmedecin/reclamationsmedecin"
            className="w-40 flex justify-center transition-all delay-1 hover:font-bold hover:text-logo-text"
          >
            Réclamations
          </Link>
          <LogoutButton />
        </nav>
      </div>
    </>
  );
}

export default NavbarMedecin;

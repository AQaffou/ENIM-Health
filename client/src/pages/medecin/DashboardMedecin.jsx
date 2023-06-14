import NavbarMedecin from "./NavbarMedecin";
import Footer from "../basicComponent/Footer";
import { AuthContexts } from "../helpers/AuthContexts";
import { useContext } from "react";

function MedecinDashboard() {
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
      <div className="flex flex-col justify-between items-center">
        <NavbarMedecin />
        <div className="flex items-center h-screen">Medecin Dashboard</div>
      </div>
      <Footer />
    </>
  );
}

export default MedecinDashboard;

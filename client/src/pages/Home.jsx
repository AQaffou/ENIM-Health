import Menu from "./landingComponents/Menu";
import Apropos from "./landingComponents/Apropos";
import Fonctionnalites from "./landingComponents/Fonctionnalites";
import Footer from "./basicComponent/Footer";
import { AuthContexts } from "./helpers/AuthContexts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function App() {
  const { authState } = useContext(AuthContexts);
  const navigateTo = useNavigate;

  if (authState.status && authState.role === "ETUDIANT") {
    navigateTo("/dashboard");
  } else {
    navigateTo("/medecindashboard");
  }
  return (
    <>
      <Menu />
      <div id="apropos">
        <Apropos />
      </div>
      <div id="fonctionnalites">
        <Fonctionnalites />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;

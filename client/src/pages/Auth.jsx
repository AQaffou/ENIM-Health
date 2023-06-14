import { useContext, useState } from "react";
import axios from "axios";
import Menu from "./landingComponents/Menu";
import { useNavigate } from "react-router-dom";
import { AuthContexts } from "./helpers/AuthContexts";

const Auth = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [cite, setCite] = useState(null);
  const [chambre, setChambre] = useState(null);
  const [mail, setMail] = useState("");
  const [matricule, setMatricule] = useState(null);
  const [password, setPassword] = useState("");

  const [mailLogin, setMailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const { setAuthState } = useContext(AuthContexts);

  const navigateTo = useNavigate();

  const handleRegister = async () => {
    await axios
      .post("http://localhost:3001/user/register", {
        nom: nom,
        prenom: prenom,
        cite: cite,
        chambre: chambre,
        mail: mail,
        matricule: matricule,
        password: password,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          console.log(response);
          // setNom("");
          // setPrenom("");
          // setCite(null);
          // setChambre(null);
          // setMail("");
          // setMatricule(null);
          // setPassword("");
        }
      });
  };
  const handleLogin = async () => {
    await axios
      .post("http://localhost:3001/user/login", {
        mail: mailLogin,
        password: passwordLogin,
      })
      .then((response) => {
        if (response.data.error) {
          // setMailLogin("");
          // setPasswordLogin("");
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.token);
          setAuthState({
            id: response.data.id,
            nom: response.data.nom,
            prenom: response.data.prenom,
            cite: response.data.cite,
            chambre: response.data.chambre,
            role: response.data.role,
            matricule: response.data.matricule,
            status: true,
          });
          if (response.data.role === "ETUDIANT") {
            navigateTo("/dashboardetudiant");
          } else if (response.data.role === "MEDECIN") {
            navigateTo("/dashboardmedecin");
          } else {
            navigateTo("/dashboardbureau");
          }
          console.log(response);
        }
      });
  };

  return (
    <>
      <div className="mb-36">
        <Menu />
      </div>
      <div className="flex justify-center gap-36">
        <div className="flex flex-col w-96 h-96 justify-between font-[mulish]">
          <input
            className="bg-[#EAF0F7] h-[50px] focus:outline-0 pl-2 rounded-xl"
            placeholder="Nom"
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            className="bg-[#EAF0F7] h-[50px] focus:outline-0 pl-2 rounded-xl"
            placeholder="Prenom"
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <input
            className="bg-[#EAF0F7] h-[50px] focus:outline-0 pl-2 rounded-xl"
            placeholder="Cité de résidence"
            type="number"
            min="1"
            max="3"
            value={cite}
            onChange={(e) => setCite(Number(e.target.value))}
          />
          <input
            className="bg-[#EAF0F7] h-[50px] focus:outline-0 pl-2 rounded-xl"
            placeholder="Numéro de chambre"
            type="number"
            
            value={chambre}
            onChange={(e) => setChambre(Number(e.target.value))}
          />
          <input
            className="bg-[#EAF0F7] h-[50px] focus:outline-0 pl-2 rounded-xl"
            placeholder="Mail institutionnel"
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            className="bg-[#EAF0F7] h-[50px] focus:outline-0 pl-2 rounded-xl"
            placeholder="Matricule"
            type="number"
            value={matricule}
            onChange={(e) => setMatricule(Number(e.target.value))}
          />
          <input
            className="bg-[#EAF0F7] h-[50px] focus:outline-0  pl-2 rounded-xl"
            placeholder="Mot passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-blue-button text-white font-semibold px-10 py-4 rounded-2xl mt-12 border-2 border-white hover:bg-white hover:text-blue-button hover:border-2 hover:border-blue-button transition-all delay-1"
            onClick={handleRegister}
          >
            S'inscrire
          </button>
        </div>
        <div className="flex flex-col w-96 h-96 justify-between font-[mulish]">
          <input
            className="bg-[#EAF0F7] h-[50px] focus:outline-0 pl-2 rounded-xl"
            placeholder="Enter Email"
            type="email"
            value={mailLogin}
            onChange={(e) => setMailLogin(e.target.value)}
          />
          <input
            className="bg-[#EAF0F7] h-[50px] focus:outline-0  pl-2 rounded-xl"
            placeholder="Mot de passe"
            type="password"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
          <button
            className="bg-blue-button text-white font-semibold px-10 py-4 rounded-2xl mt-12 border-2 border-white hover:bg-white hover:text-blue-button hover:border-2 hover:border-blue-button transition-all delay-1"
            onClick={handleLogin}
          >
            Se connecter
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;

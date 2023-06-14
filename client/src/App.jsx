import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardEtudiant from "./pages/etudiant/DashboardEtudiant";
import ConseilsEtudiant from "./pages/etudiant/ConseilsEtudiant";
import RendezvousEtudiant from "./pages/etudiant/RendezvousEtudiant";
import ReclamationsEtudiant from "./pages/etudiant/ReclamationsEtudiant";
import ForumEtudiant from "./pages/etudiant/ForumEtudiant";
import MedicamentsEtudiant from "./pages/etudiant/MedicamentsEtudiant";

import DashboardMedecin from "./pages/medecin/DashboardMedecin";
import ConseilsMedecin from "./pages/medecin/Conseilsmedecin";
import RendezvousMedecin from "./pages/medecin/Rendezvousmedecin";
import ReclamationsMedecin from "./pages/medecin/ReclamationsMedecin";
import ForumMedecin from "./pages/medecin/Forummedecin";
import MedicamentsMedecin from "./pages/medecin/Medicamentsmedecin";

import DashboardBureau from "./pages/bureau/DashboardBureau";
import ReclamationsBureau from "./pages/bureau/ReclamationsBureau";
import MedicamentsBureau from "./pages/bureau/MedicamentsBureau";
import CommandeBureau from "./pages/bureau/CommandeBureau";

import axios from "axios";
import Auth from "./pages/Auth";

import { AuthContexts } from "./pages/helpers/AuthContexts";

function App() {
  const [authState, setAuthState] = useState({
    id: null,
    nom: "",
    prenom: "",
    cite: null,
    chambre: null,
    role: null,
    matricule: null,
    status: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/auth", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
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
        }
        setIsLoading(false);
      });
  }, []);
  return (
    <AuthContexts.Provider value={{ authState, setAuthState, isLoading }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/dashboardetudiant" element={<DashboardEtudiant />} />
          <Route
            path="/dashboardetudiant/rendezvousetudiant"
            element={<RendezvousEtudiant />}
          />
          <Route
            path="/dashboardetudiant/reclamationsetudiant"
            element={<ReclamationsEtudiant />}
          />
          <Route
            path="/dashboardetudiant/conseilsetudiant"
            element={<ConseilsEtudiant />}
          />
          <Route
            path="/dashboardetudiant/forumetudiant"
            element={<ForumEtudiant />}
          />
          <Route
            path="/dashboardetudiant/medicamentsetudiant"
            element={<MedicamentsEtudiant />}
          />

          <Route path="/dashboardmedecin" element={<DashboardMedecin />} />
          <Route
            path="/dashboardmedecin/rendezvousmedecin"
            element={<RendezvousMedecin />}
          />
          <Route
            path="/dashboardmedecin/reclamationsmedecin"
            element={<ReclamationsMedecin />}
          />
          <Route
            path="/dashboardmedecin/conseilsmedecin"
            element={<ConseilsMedecin />}
          />
          <Route
            path="/dashboardmedecin/forummedecin"
            element={<ForumMedecin />}
          />
          <Route
            path="/dashboardmedecin/medicamentsmedecin"
            element={<MedicamentsMedecin />}
          />

          <Route path="/dashboardbureau" element={<DashboardBureau />} />
          <Route
            path="/dashboardbureau/reclamationsbureau"
            element={<ReclamationsBureau />}
          />
          <Route
            path="/dashboardbureau/medicamentsbureau"
            element={<MedicamentsBureau />}
          />
          <Route
            path="/dashboardbureau/commandebureau"
            element={<CommandeBureau />}
          />

          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </AuthContexts.Provider>
  );
}

export default App;

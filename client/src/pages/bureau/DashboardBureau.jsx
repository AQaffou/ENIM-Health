import NavbarBureau from "./NavbarBureau";
import Footer from "../basicComponent/Footer";
import { AuthContexts } from "../helpers/AuthContexts";
import { useContext } from "react";

function DashboardBureau() {
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
        <NavbarBureau />
        <div className="flex items-center h-screen">Bureau DashboardBureau</div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardBureau;

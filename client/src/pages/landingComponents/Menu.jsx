import { HashLink } from "react-router-hash-link";
import ButtonAuth from "./ButtonAuth";

function Menu() {
  return (
    <>
      <div className="w-screen flex fixed top-0 bg-white z-10 items-center justify-between px-40 py-6 drop-shadow-sm">
        <div className="flex items-center">
          <img className="mr-2 w-" src="./assets/Logo.png" alt="Logo" />
          <h1 className="font-main font-bold text-2xl text-logo-text">
            EnimHealth
          </h1>
        </div>
        <section className="flex font-main font-normal text-light-grey">
          <HashLink
            smooth
            to="/#apropos"
            className="w-40 flex justify-center  delay-1 transition-all delay-1 hover:font-bold hover:text-logo-text"
          >
            A propos
          </HashLink>
          <HashLink
            smooth
            to="/#fonctionnalites"
            className="w-40 flex justify-center transition-all delay-1 hover:font-bold hover:text-logo-text"
          >
            Fonctionnalités
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="w-40 flex justify-center transition-all delay-1 hover:font-bold hover:text-logo-text"
          >
            Contactez-nous
          </HashLink>
          <HashLink className="w-40 flex justify-center transition-all delay-1 hover:font-bold hover:text-logo-text">
            <ButtonAuth />
          </HashLink>
        </section>
      </div>
    </>
  );
}

export default Menu;

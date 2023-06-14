import ButtonAuth from "./ButtonAuth";
import { useNavigate } from "react-router-dom";

function Apropos() {
  const navigateTo = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center mt-36">
        <div className="flex justify-evenly font-main w-screen mt-10 bg-[url('/assets/landing_page/element.png')] bg-no-repeat">
          <div className="w-[450px]">
            <h1 className="text-5xl font-bold mt-28 mb-8">
              Service médical digitalisé
            </h1>
            <p className="text-light-grey text-xl font-light">
              EnimHealth fournit un service médical digitalisé en faveur des
              étudiants de l’Ecole Nationale de l’Industrie Minérale.
            </p>
            <button className="bg-blue-button text-white font-semibold px-10 py-4 rounded-full mt-12 border-2 border-white hover:bg-white hover:text-blue-button hover:border-2 hover:border-blue-button transition-all delay-1"           
              onClick={() => navigateTo("/auth")}>S'authentifier
            </button>
          </div>
          <div className=""> 
            <img
              className="w-[650px]"
              src="assets\landing_page\landing_page.png"
              alt=""
            />
          </div>
        </div>
        <section className="mt-36 drop-shadow-2xl  flex flex-col items-center bg-gradient-to-tl from-[#5A98F2] to-[#47b4ee]  w-[70%] px-24 pt-10 pb-12 leading-[30px] rounded-2xl font-main text-[18px] text-white ">
          <h1 className="font-bold text-[36px] text-center mb-8">A propos</h1>
          <div className="w-[7%] mb-10 border-[1px] rounded-xl border-white"></div>
          <p className="text-justify">
            EnimHealth est une application de soins de santé en ligne, qui offre
            des services de qualité, accessibles et abordables pour les
            étudiants. Notre mission est de faciliter l'accès aux soins pour les
            étudiants qui ont des horaires chargés et des contraintes
            financières. Avec EnimHealth, les utilisateurs peuvent bénéficier de
            consultations médicales en ligne, de prescriptions de médicaments,
            de conseils en matière de santé mentale, et bien plus encore, le
            tout depuis leur smartphone ou leur ordinateur. Notre équipe de
            professionnels de la santé est à l'écoute de vos besoins et s'engage
            à vous offrir un service de qualité, sans jamais compromettre votre
            santé ou votre sécurité. Rejoignez notre communauté EnimHealth dès
            aujourd'hui et prenez le contrôle de votre santé en ligne.
          </p>
        </section>
      </div>
    </>
  );
}

export default Apropos;

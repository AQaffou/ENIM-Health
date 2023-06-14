import { uid } from "react-uid";

function Fonctionnalites() {
  const cards = [
    {
      id: uid,
      title: "Rendez-vous",
      content: "Vous pouvez prendre des rendez-vous en ligne",
      image: "/assets/landing_page/icone_rendez_vous.png",
    },
    {
      id: uid,
      title: "Médicaments",
      content: "Vous pouvez consulter la liste des médicaments",
      image: "/assets/landing_page/icone_medicaments.png",
    },
    {
      id: uid,
      title: "Conseils",
      content: "Vous pouvez accéder aux conseils de la santé et le bien-être",
      image: "/assets/landing_page/icone_conseils.png",
    },
    {
      id: uid,
      title: "Forum",
      content:
        "Vous pouvez lire les fils de discussion existantees et en créer de nouveaux",
      image: "/assets/landing_page/icone_forum.png",
    },
    {
      id: uid,
      title: "Réclamations",
      content: "Vous pouvez soumettre des réclamations en cas de problème",
      image: "/assets/landing_page/icone_reclamations.png",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-36">
      <div className="flex flex-col items-center text-main bg-[url('/assets/landing_page/element.png')] bg-no-repeat">
        <h1 className="text-[30px] font-semibold text-center mb-8">
          Fonctionnalités
        </h1>
        <div className="w-[4%] mb-10 border-[1px] rounded-xl border-black"></div>
        <p className="text-light-grey w-[57%] text-center text-[18px] leading-[30px]">
          Voici les meilleures options que nous proposons dans le cadre de notre
          application de service médical pour notre école. Notre médecin
          hautement qualifié est disponible pour vous fournir un traitement
          adapté à vos besoins de santé. N'hésitez pas à s’authentifier pour
          bénéficier de ces services numériques
        </p>
      </div>
      <div className=" px-48 bg-[url('/assets/landing_page/Vector.png')] bg-no-repeat bg-[length:800px_600px] mt-12 pt-4">
        <div className="py-7 flex flex-wrap gap-16 justify-center items-start">
          {cards.map(({ id, title, content, image }) => {
            return (
              <div
                key={id}
                className="px-10 py-12 drop-shadow-[0px_-1px_9px_rgba(0,0,0,0.25)] flex flex-col items-start w-[345px] h-[375px] bg-white  rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
              >
                <div className="">
                  <img
                    className="py-2 h-[110px] mb-8"
                    src={image}
                    alt={title}
                  />
                </div>
                <div className="">
                  <div className="text-[24px] font-bold py-2">{title}</div>
                  <div className="text-[16px] py-4 text-light-grey">
                    {content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center mt-40 mx-40 w-screen gap-[220px]">
        <div className="w-[470px]">
          <h1 className="text-[36px] font-semibold mb-2">Rendez-vous</h1>
          <div className="w-[12%] mb-16 border-[1px] rounded-xl border-black"></div>
          <p className="text-light-grey text-xl font-normal">
            Vous pouvez prendre des rendez-vous en ligne en fonction de
            l'horaire de disponibilité du médecin. Vous devez évaluer votre état
            de santé et décider si vous avez besoin d'une consultation à
            domicile ou chez le médecin.{" "}
          </p>
        </div>
        <div className="">
          <img
            className="w-[550px]"
            src="assets\landing_page\image_rendez_vous.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-40 mx-40 w-screen gap-[250px]">
        <div className="w-[470px] ml-[100px]">
          <h1 className="text-[36px] font-semibold mb-2">Médicaments</h1>
          <div className="w-[12%] mb-16 border-[1px] rounded-xl border-black"></div>
          <p className="text-light-grey text-xl font-normal">
            Vous pouvez facilement consulter la liste des médicaments
            disponibles au stock.{" "}
          </p>
        </div>
        <div className="">
          <img
            className="w-[550px]"
            src="assets\landing_page\image_medicaments.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center mt-40 mx-40 w-screen gap-[220px]">
        <div className="w-[460px]">
          <h1 className="text-[36px] font-semibold mb-2">Conseils</h1>
          <div className="w-[12%] mb-16 border-[1px] rounded-xl border-black"></div>
          <p className="text-light-grey text-xl font-normal">
            Vous pouvez bénéficier des informations professionnelles sur la
            santé et le bien-être pour vous aider à prendre des décisions
            éclairées sur votre santé.{" "}
          </p>
        </div>
        <div className="">
          <img
            className="w-[550px]"
            src="assets\landing_page\image_conseils.png"
            alt=""
          />
        </div>
      </div>
      <div className="z-[-1] bg-[url('/assets/landing_page/element.svg')] h-36 w-screen bg-no-repeat bg-[center_right_10rem] mt-36"></div>
    </div>
  );
}

export default Fonctionnalites;

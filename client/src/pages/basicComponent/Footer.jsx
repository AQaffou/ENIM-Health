function Footer() {
  return (
    <>
      <div className="text-white flex items-start pt-16 justify-evenly font-main h-[300px] w-screen bg-gradient-to-tl from-[#5A98F2] to-[#47b4ee] mt-[0px] z-10">
        <div className="">
          <div className="flex items-center">
            <img className="pr-4" src="./assets/Logo-white.svg" alt="" />
            <h1 className="text-[24px] text-white font-semibold">EnimHealth</h1>
          </div>
          <p className="text-white w-[300px] mt-8 leading-[2rem] font-extralight text-[18px]">
            EnimHealth offre un service de santé numérique destiné aux étudiants
            au sein de leur établissement.
          </p>
        </div>
        <div className="">
          <h1 className="text-[20px] font-semibold">Coordonnées</h1>
          <div className="mt-8">
            <div className="mb-3 flex items-center">
              <img className="pr-6" src="/assets/icone_location.png" alt="" />
              <h1 className="text-[18px] font-light">Agdal - Rabat</h1>
            </div>
            <div className="mb-3 flex items-center">
              <img className="pr-6" src="/assets/icone_telephone.png" alt="" />
              <h1 className="text-[18px] font-light">+212880800800</h1>
            </div>
            <div className="mb-3 flex items-center">
              <img className="pr-6" src="/assets/icone_mail.png" alt="" />
              <h1 className="text-[18px] font-light">enimhealth@sante.com </h1>
            </div>
          </div>
        </div>
        <div className=" text-[20px] font-semibold">
          <h1 className="text-[20px] font-semibold">Réseaux sociaux</h1>
          <div className="mt-8">
            <a href="#" className="mb-3 flex items-center">
              <img className="pr-5" src="/assets/icone_facebook.png" alt="" />
              <h1 className="text-[18px] font-light">EnimHealth</h1>
            </a>
            <a href="#" className="mb-3 flex items-center">
              <img className="pr-6" src="/assets/icone_instagram.png" alt="" />
              <h1 className="text-[18px] font-light">enim_health</h1>
            </a>
            <a href="#" className="mb-3 flex items-center">
              <img className="pr-6" src="/assets/icone_twitter.png" alt="" />
              <h1 className="text-[18px] font-light">EnimHealth</h1>
            </a>
          </div>
        </div>
        <img
          className="w-[170px] h-[180px]"
          src="/assets/image_aeenim.png"
          alt=""
        />
        <img
          className="w-[180px] h-[175px]"
          src="/assets/image_ensmr.png"
          alt=""
        />
      </div>
    </>
  );
}

export default Footer;

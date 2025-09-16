import Breadcrumb from "@/components/Breadcrumb";
import BlogAreaList from "@/components/BlogAreaList";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Station d’Épuration – Complexe Résidentiel & Touristique | Seoul Construction | sme2d",
  description:
    "Découvrez le projet de station d’épuration réalisé par Seoul Construction au village El Aarjate. Le projet inclut le traitement de l’eau brute, la filtration et le rejet d’eau traitée conforme aux normes environnementales. Procédé MBBR, électricité et automatisme, énergie renouvelable et système d’aération avancé.",
};


    const page = () => {
      return (
        <>
          {/* Preloader */}
          <Preloader />

          {/* Header one
          <HeaderOne /> */}

          {/* Hero Three 
          <HeroThree /> */}

          {/* Breadcrumb */}
          <Breadcrumb
          title="Station d’Épuration – Complexe Résidentiel & Touristique | Seoul Construction"
          imageHeader="/assets/img/hero/project-1.jpeg"
          />
          
          {/* BlogDetails 
          <BlogDetails/>*/}
          
          {/*BlogAreaList */}
    <BlogAreaList
      imageUrl="/assets/img/projet/projet-2.png"
    //   overlayTexts={[
    //     "ENTRÉE D’EAU",
    //     "ASPECT D’EAU À LA SORTIE DE LA STEP",
    //   ]}
      tables={[
        {
          title: "Caractéristiques d’eau brute",
          headers: ["Paramètre", "Valeur"],
          rows: [
            ["Débit journalier entrant : Q", "80  m3/j"],
            ["Charge entrante en DBO₅", "kg/J"],
            ["Charge entrante en DCO", "kg/J"],
            ["Charge entrante en MES", "mg/l"],
          ],
        },
        {
          title: "Caractéristiques d’eau à la sortie",
          headers: ["Paramètres physico-chimiques", "Concentration maximale*"],
          rows: [
            ["DBO₅", "30 mg/l"],
            ["DCO", "125 mg/l"],
            ["MES", "60  mg/l"],
          ],
        }, 
      ]}
      sidebar={{
        caseStudies: [
          { label: "Client", value: "XXXX" },
          { label: "Type de Procédé", value: "SBR" },
          { label: "Localisation du Projet", value: "XXXX" },
        ],
      }}
      categories={[
        { label: "Traitement-Eaux", href: "/#" },
        { label: "Pompage-Relevage", href: "/#" },
        { label: "Epuration", href: "/#" },
        { label: "Electricite-Automatisme",  href: "/#" },
        { label: "Energie-Renouvelable",  href: "/#" },
      ]}
    sectionTitle="QUELQUES PHOTOS DE LA STEP DE PRISON D’EL ARJAT"
    sliderData={[
      { img: "/assets/img/team/step-1-1.png", title: "Traitement de boues"},
      { img: "/assets/img/team/step-1-2.png", title: "Rejet d’eau traitée" },
      { img: "/assets/img/team/step-1-3.png", title: "Traitement tertiaire: filtration &UV"},
      { img: "/assets/img/team/step-1-4.png", title: "Système d’aération " },
      { img: "/assets/img/team/step-1-5.png", title: "Réacteurs biologique préfabriqués" },
      { img: "/assets/img/team/step-1-6.png", title: "Ouvrage de répartition de débit" },
      { img: "/assets/img/team/step-1-7.png", title: "Dégrillage automatique" },
      { img: "/assets/img/team/step-1-8.png", title: "Electricité et automatisme" },
    ]}
    />
      {/* CategoryAreaOne 
      <CategoryAreaOne/> */} 

      {/* PortfolioOne ***
      <PortfolioOne/>   */}

      {/* Subscribe One
      {/* Subscribe One */}

      {/* Footer Area One 
      <FooterAreaTwo /> */}
    </>
  );
};

export default page;

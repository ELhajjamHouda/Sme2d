import Breadcrumb from "@/components/Breadcrumb";
import BlogAreaList from "@/components/BlogAreaList";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Station de Prétraitement des Rejets Industriels – Usine SILDA | Seoul Construction | sme2d",
  description:
    "Découvrez le projet de station de prétraitement des rejets industriels de l’usine SILDA, intégrant des solutions durables pour la gestion et le traitement des effluents.",
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
          title="Station d’Épuration – Complexe Résidentiel & Touristique, Souelem Trifia"
          imageHeader="/assets/img/hero/project-1.jpeg"
          />
          
          {/* BlogDetails 
          <BlogDetails/>*/}
          
          {/*BlogAreaList */}
    <BlogAreaList
      imageUrl="/assets/img/projet/projet-3.png"
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
            ["Charge entrante en MES", "kg/J"],
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
          { label: "Localisation du Projet", value: "xxxx" },
        ],
      }}
      categories={[
        { label: "Traitement-Eaux", href: "/#" },
        { label: "Pompage-Relevage", href: "/#" },
        { label: "Epuration", href: "/#" },
        { label: "Electricite-Automatisme",  href: "/#" },
        { label: "Energie-Renouvelable",  href: "/#" },
      ]}
    // sectionTitle="Quelques images des projets STEP industriels et résidentiels"
    // sliderData={[
    //   { img: "/assets/img/projet/projet-3-1.svg", title: "PRÉPARATION ET DOSAGE CHIMIQUE "},
    //   { img: "/assets/img/projet/projet-3-2.svg", title: "TRAITEMENT PHYSICO-CHIMIQUE  PAR DAF " },
    //   { img: "/assets/img/projet/projet-3-3.svg", title: "TRAITEMENT DE BOUES PAR FILTRE PRESSE"},
    //   { img: "/assets/img/projet/projet-3-4.svg", title: "PRÉTRAITEMENT: TAMIS ROTATIF" },
    //   { img: "/assets/img/projet/projet-3-5.svg", title: "STATION COMPLÈTEMENT AUTOMATISÉE" },
    //   { img: "/assets/img/projet/projet-3-1.svg", title: "PRÉPARATION ET DOSAGE CHIMIQUE "},
    //   { img: "/assets/img/projet/projet-3-2.svg", title: "TRAITEMENT PHYSICO-CHIMIQUE  PAR DAF " },
    //   { img: "/assets/img/projet/projet-3-3.svg", title: "TRAITEMENT DE BOUES PAR FILTRE PRESSE"},

    // ]}
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

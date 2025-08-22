import Breadcrumb from "@/components/Breadcrumb";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import HeaderOne from "@/components/HeaderOne";
import ServiceDetails from "@/components/ServiceDetails";
import SubscribeOne from "@/components/SubscribeOne";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "traitement-de-l'air || Maintenance, Support & Suivi Client - SME2D",
  description:
    "SME2D propose un service après-vente complet avec maintenance préventive et corrective, un stock permanent de pièces détachées, et des prestations d’exploitation pour stations de traitement, relevage et pompage. Garantissez la fiabilité et la performance de vos installations avec notre équipe dédiée."
};

const Page = () => {
  return (
    <>
      {/* Header 
      <HeaderOne /> */}

      {/* Breadcrumb */}
      <Breadcrumb
        title="Service Après-vente et exploitation"
        imageHeader="url(assets/img/hero/traitement-de-l-air.png)"
      />

      {/* Service Details */}
      <ServiceDetails
        Title1="Service après-vente et exploitation"
        Para1={
          <>
            <p>
              Le <strong>traitement de l’air</strong> est une étape essentielle lors de la
              réalisation d’une <strong>station d’épuration</strong>, d’un <strong>poste de relevage</strong> ou
              d’une <strong>station de pompage</strong> des eaux usées. L’objectif est de capturer et traiter
              l’air vicié afin de limiter les nuisances olfactives et préserver le confort des
              exploitants et des riverains.
            </p>

            <p>
              <strong>SME2D</strong> propose des solutions adaptées pour la <strong>désodorisation</strong>, qu’il
              s’agisse de <strong>tours à charbon actif</strong> ou d’<strong>unités de lavage chimique des gaz</strong>.
              Nos systèmes permettent de garantir un environnement sain et conforme aux normes
              environnementales en vigueur.
            </p>
          </>

        }
        Img1="assets/img/service/traitement-de-l-air-1.png"
        Img2="assets/img/service/traitement-de-l-air-2.png"
        Img3="assets/img/service/traitement-de-l-air-3.png"
      />

      {/* Subscribe Section */}
      <SubscribeOne />

      {/* Footer */}
      {/* <FooterAreaTwo /> */}
    </>
  );
};

export default Page;

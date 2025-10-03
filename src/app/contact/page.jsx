import Breadcrumb from "../../components/Breadcrumb";
import ContactArea from "../../components/ContactArea";
import FooterAreaTwo from "../../components/FooterAreaTwo";
import HeaderOne from "../../components/HeaderOne";
import SubscribeOne from "../../components/SubscribeOne";
import Preloader from "../../helper/Preloader";

export const metadata = {
  title: "Contact || SME2D - Réparation Auto & Services Automobile",
  description:
    "Contactez SME2D pour toute demande d'information, devis ou assistance. Notre équipe dédiée est prête à répondre à vos questions et à vous offrir un service auto rapide et fiable.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
       <Preloader />

      {/* Header one 
       <HeaderOne />

      {/* Breadcrumb */}
        <Breadcrumb
        title="Contact"
        imageHeader="/assets/img/hero/contact.svg"
         />

        {/* Contact Area */}
        <ContactArea />

        {/* Subscribe One */}
        {/* Subscribe One */}

        {/* Footer Area One 
        <FooterAreaTwo />*/}
        </>
  );
};

export default page;

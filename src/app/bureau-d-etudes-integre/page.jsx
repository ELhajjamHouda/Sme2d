import Breadcrumb from "@/components/Breadcrumb";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import HeaderOne from "@/components/HeaderOne";
import HeroOne1 from "@/components/HeroOne1";
///import HeaderOne from "@/components/HeaderOne";
import ServiceDetails from "@/components/ServiceDetails";
import SubscribeOne from "@/components/SubscribeOne";
import Preloader from "@/helper/Preloader";


export const metadata = {
  title: "Bureau d’études intégré || Fixturbo - Car Repair & Auto Services",
  description: "Description spécifique pour la page bureau d’études intégré.",
};


const page = () => {
  return (
    <>
{/* Preloader */}
<Preloader />

{/* Header one */}
<HeaderOne />

{/* Header one 
<HeaderOne />*/}

{/* Header one */}
<HeroOne1 title={"Bureau d’études intégré"}/>

{/* Breadcrumb
<Breadcrumb title={"Bureau d’études intégré"} /> */}

{/* Service Details */}
<ServiceDetails />

{/* Subscribe One */}
<SubscribeOne />

{/* Footer Area One */}
<FooterAreaTwo />
    </>
  );
};

export default page;

import AboutFour from "@/components/AboutFour";
import BlogAreaTwo from "@/components/BlogAreaTwo";
import CTAAreaTwo from "@/components/CTAAreaTwo";
import ClientAreaThree from "@/components/ClientAreaThree";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import HeaderThree from "@/components/HeaderThree";
import HeroFour from "@/components/HeroFour";
import PortfolioTwo from "@/components/PortfolioTwo";
import PricingPlanTwo from "@/components/PricingPlanTwo";
import ProcessAreaTwo from "@/components/ProcessAreaTwo";
import ServiceAreaTwo from "@/components/ServiceAreaTwo";
import SubscribeOne from "@/components/SubscribeOne";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Home || Fixturbo - Car Repair & Auto Services NEXT Js Template",
  description:
    "Fixturbo is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header Three */}
      <HeaderThree />

      {/* Hero Four */}
      <HeroFour />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* About Four */}
      <AboutFour />

      {/* Portfolio Two */}
      <PortfolioTwo />

      {/* Process Area Two */}
      <ProcessAreaTwo />

      {/* CTA Area Two */}
      <CTAAreaTwo />

      {/* Pricing Plan Two */}
      <PricingPlanTwo />

      {/* Client Area three */}
      <ClientAreaThree />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaTwo />
    </>
  );
};

export default page;

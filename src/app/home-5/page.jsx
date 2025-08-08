import AboutOne from "@/components/AboutOne";
import BlogAreaTwo from "@/components/BlogAreaTwo";
import ClientAreaThree from "@/components/ClientAreaThree";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import HeaderFour from "@/components/HeaderFour";
import HeroFive from "@/components/HeroFive";
import IntroAreaTwo from "@/components/IntroAreaTwo";
import PortfolioThree from "@/components/PortfolioThree";
import ServiceAreaFour from "@/components/ServiceAreaFour";
import ServiceAreaThree from "@/components/ServiceAreaThree";
import TeamAreaFour from "@/components/TeamAreaFour";
import WhyChooseUsTwo from "@/components/WhyChooseUsTwo";
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

      {/* Header Four */}
      <HeaderFour />

      {/* Hero Five */}
      <HeroFive />

      {/* Service Area Three */}
      <ServiceAreaThree />

      {/* About One */}
      <AboutOne />

      {/* Service Area Four */}
      <ServiceAreaFour />

      {/* Why Choose Us Two */}
      <WhyChooseUsTwo />

      {/* Portfolio Three */}
      <PortfolioThree />

      {/* Intro Area Two */}
      <IntroAreaTwo />

      {/* Team Area Four */}
      <TeamAreaFour />

      {/* ClientAreaThree */}
      <ClientAreaThree />

      {/* BlogAreaTwo */}
      <div className="space-top">
        <BlogAreaTwo />
        </div>

      {/* Footer Area Three */}
      <FooterAreaTwo />
    </>
  );
};

export default page;


import AboutFour from "@/components/AboutFour";
import AboutOne from "@/components/AboutOne";
import AboutThree from "@/components/AboutThree";
import AboutTwo from "@/components/AboutTwo";
import TeamDetails from "@/components/TeamDetails";
import Breadcrumb from "@/components/Breadcrumb";
import CTAAreaOne from "@/components/CTAAreaOne";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import HeaderOne from "@/components/HeaderOne";
import ProcessAreaOne from "@/components/ProcessAreaOne";
import SubscribeOne from "@/components/SubscribeOne";
import TeamAreaTwo from "@/components/TeamAreaTwo";
import TestimonialOne from "@/components/TestimonialOne";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "About || Fixturbo - Car Repair & Auto Services NEXT Js Template",
  description:
    "Fixturbo is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"À propos de nous"} />
     
      {/* TeamDetails*/}
      <TeamDetails />

      {/* About Area */}
      <AboutOne />

      {/* Process Area One   *****
      <ProcessAreaOne />*/}

      {/* CTA Area One */}
      <CTAAreaOne /> 

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Team Area Two 
      <TeamAreaTwo />*/}

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One 
      <FooterAreaTwo /> */}
    </>
  );
};

export default page;

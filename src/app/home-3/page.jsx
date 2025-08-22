import AboutThree from "@/components/AboutThree";
import BlogAreaThree from "@/components/BlogAreaThree";
import CTAAreaOne from "@/components/CTAAreaOne";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FeatureAreaOne from "@/components/FeatureAreaOne";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import HeaderOne from "@/components/HeaderOne";
import HeroThree from "@/components/HeroThree";
import IntroAreaOne from "@/components/IntroAreaOne";
import MarqueeOne from "@/components/MarqueeOne";
import PortfolioTwo from "@/components/PortfolioTwo";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import SubscribeOne from "@/components/SubscribeOne";
import TeamAreaThree from "@/components/TeamAreaThree";
import TestimonialOne from "@/components/TestimonialOne";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Home || sme2d - Car Repair & Auto Services NEXT Js Template",
  description:
    "sme2d is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header Two */}
      <HeaderOne />

      {/* Hero Three */}
      <HeroThree />

      {/* Feature Area One */}
      <FeatureAreaOne />

      {/* About Three */}
      <AboutThree />

      {/* Intro Area One */}
      <IntroAreaOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* Portfolio Two */}
      <PortfolioTwo />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Marquee One */}
      <MarqueeOne />

      {/* TeamAreaThree */}
      <TeamAreaThree />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Blog Area Three */}
      <BlogAreaThree />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaTwo />
    </>
  );
};

export default page;

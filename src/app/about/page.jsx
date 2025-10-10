import AboutOne from "../../components/AboutOne";
import TeamDetails from "../../components/TeamDetails";
import Breadcrumb from "../../components/Breadcrumb";
import MarqueeOne from "../../components/MarqueeOne";
import FaqAreaTwo from "../../components/FaqAreaTwo";
import TestimonialOne from "../../components/TestimonialOne";
import Preloader from "../../helper/Preloader";

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

      {/* Breadcrumb */}
        <Breadcrumb
        title="À propos de nous"
        imageHeader="/assets/img/hero/about.png"
         />

     {/* MarqueeOne */}
     <MarqueeOne />

      {/* FaqAreaTwo */}
      <FaqAreaTwo />

      {/* TeamDetails*/}
      <TeamDetails />


      {/* About Area */}
      <AboutOne />

     {/* Testimonial One */}
      <TestimonialOne />
    </>
  );
};

export default page;

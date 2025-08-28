import Breadcrumb from "@/components/Breadcrumb";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import PortfolioOne from "@/components/PortfolioOne";
import BlogDetails from "@/components/BlogDetails";
import ServiceAreaOne_multi_img from "@/components/ServiceAreaOne_multi_img";
import BlogAreaList from "@/components/BlogAreaList";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Service || sme2d - Car Repair & Auto Services NEXT Js Template",
  description:
    "sme2d is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
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
       title="station epuration prison el arjat-1"
       imageHeader="/assets/img/hero/project-1.jpeg"
      />
      

      {/* BlogDetails 
      <BlogDetails/>*/}
       
      {/*BlogAreaList */}
      <BlogAreaList/>

      {/* PortfolioOne */}
      <PortfolioOne/> 

      {/* Subscribe One
      {/* Subscribe One */}

      {/* Footer Area One 
      <FooterAreaTwo /> */}
    </>
  );
};

export default page;

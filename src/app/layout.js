import BootstrapInit from "@/helper/BootstrapInit";
import "./font.css";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import "./globals.scss";

export const metadata = {
  title: "Fixturbo - Car Repair & Auto Services NEXT Js Template",
  description:
    "Fixturbo is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="sme2d" />
      <BootstrapInit />
      <body suppressHydrationWarning={true}>
        

        {/* Preloader */}
        <Preloader />

        {/* Header Two */}
        <HeaderOne />

        {children}

        {/* Footer Area Two */}
        <FooterAreaTwo />

      </body>
    </html>
  );
}

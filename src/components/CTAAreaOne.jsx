// import Link from "next/link";
//             <div className="service-card style2">
//               <div
//                 className="service-card_content"
//                 style={{
//                   backgroundImage: "url(assets/img/portfolio/portfolio-6.png)",
//                 }}
//               >
//                 <div>
//                   <div className="service-card_icon">
//                     <img src="assets/img/icon/service-icon_1-3.svg" alt="sme2d" />
//                   </div>
//                   <h4 className="service-card_title h5">
//                     <Link href="/service-details">Électricité et Automatisme</Link>
//                   </h4>
//                   <p className="service-card_text">Apprendre encore plus</p>
//                 </div>
//               </div>
//               <Link href="/service-details" className="btn style4">
//                 En savoir plus <i className="fas fa-arrow-right" />
//               </Link>
//             </div>

// const CTAAreaOne = () => {
//   return (
//     <div className="cta-area-1">
//       <div className="cta1-bg-thumb">
//         {/* <img src="assets/img/bg/cta-bg1-1.png" alt="sme2d" /> */}
//       </div>
//       <div className="container">
//         <div className="cta-wrap1">
//           <div className="row justify-content-md-between align-items-center">
//             <div className="col-lg-6 col-md-8">
//               <div className="title-area mb-md-0">
//                 <span className="sub-title style2 text-white">Contactez-nous</span>
//                   <h2 className="sec-title text-white mb-0">
//                     Qualité, abordabilité et service,<br/> technologies de l'eau
//                   </h2>
//               </div>
//             </div>
//             <div className="col-md-auto">
//               <div className="title-area mb-0">
//                 <Link className="btn" href="/contact">
//                  Voir plus <i className="fas fa-arrow-right ms-2" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CTAAreaOne;








import Link from "next/link";


const CTAAreaOne = () => {
  return (
    <div className="cta-area-1">
      <div className="cta1-bg-thumb">
        <img src="assets/img/bg/cta-bg1-1.png" alt="Fixturbo" />
      </div>
      <div className="container">
        <div className="cta-wrap1">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area mb-md-0">
                <span className="sub-title style2 text-white">Contactez-nous</span>
                  <h2 className="sec-title text-white mb-0">
                    Qualité, abordabilité<br/>
                    et service, technologies de l'eau
                  </h2>

              </div>
            </div>
            <div className="col-md-auto">
              <div className="title-area mb-0">
                <Link className="btn" href="/contact">
                 Voir plus <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAAreaOne;

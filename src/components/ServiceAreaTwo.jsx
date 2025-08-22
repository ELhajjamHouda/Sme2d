
import Link from "next/link";

const ServiceAreaTwo = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">nous offrons</span>
              {/* Nouveau wrapper pour l'image en fond */}
              <div className="sec-title-wrapper">
                <h2 className="sec-title">
                  Une Variété de Services de Qualité Vous Attend Chez Nous.{" "}
                </h2>
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="sme2d"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-1.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-1.svg"
                      alt="sme2d"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service-details">TRAITEMENT DES EAUX</Link>
                  </h4>
                  <p className="service-card_text">
                    Apprendre encore plus{" "}
                  </p>
                </div>
              </div>
              <Link href="/service-details" className="btn style4">
                En savoir plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-2.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-2.svg"
                      alt="sme2d"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service-details">POMPAGE & RELEVAGE</Link>
                  </h4>
                  <p className="service-card_text">
                   Apprendre encore plus{" "}
                  </p>
                </div>
              </div>
              <Link href="/service-details" className="btn style4">
                En savoir plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-3.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-3.svg"
                      alt="sme2d"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service-details">ÉPURATION DES EAUX</Link>
                  </h4>
                  <p className="service-card_text">
                    Apprendre encore plus{" "}
                  </p>
                </div>
              </div>
              <Link href="/service-details" className="btn style4">
                En savoir plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaTwo;

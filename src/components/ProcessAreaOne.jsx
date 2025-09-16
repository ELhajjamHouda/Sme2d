"use client";

import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const ProcessAreaOne = () => {
  return (
    <section className="process-area-1 space position-relative">
      <div className="portfolio-shape-img shape-mockup d-lg-block d-none">
        <img
          className="about1-shape-img-1 spin"
          src="/assets/img/normal/about_shape1-2.svg"
          alt="sme2d"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="/assets/img/normal/about_shape1-1.svg"
          alt="sme2d"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Notre processus de travail</span>
              <h2 className="sec-title">
                Atteignez vos objectifs en 4 étapes
              </h2>
            </div>
          </div>
        </div>

        {/* 4 colonnes */}
        <div className="row gy-30">
          {/* Étape 1 */}
          <div className="col-lg-3 col-md-6 process-card-wrap">
            <div className="process-card">
              <div className="process-counter-icon">
                <h2 className="process-counter-number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible ? <CountUp delay={0} start={0} end={1} /> : 0
                    }
                  </TrackVisibility>
                </h2>
              </div>
              <h4 className="process-card-title">Consultez-nous dès maintenant</h4>
              <p className="process-card-text">
                Prenez contact avec nous pour recevoir un devis gratuit.
              </p>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="col-lg-3 col-md-6 process-card-wrap">
            <div className="process-card">
              <div className="process-counter-icon">
                <h2 className="process-counter-number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible ? <CountUp delay={0} start={0} end={2} /> : 0
                    }
                  </TrackVisibility>
                </h2>
              </div>
              <h4 className="process-card-title">Connaître vos besoins</h4>
              <p className="process-card-text">
                Cette étape est primordiale : il est essentiel pour nous de bien cerner ce dont nous aurons besoin pour concrétiser votre projet.
              </p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="col-lg-3 col-md-6 process-card-wrap">
            <div className="process-card">
              <div className="process-counter-icon">
                <h2 className="process-counter-number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible ? <CountUp delay={0} start={0} end={3} /> : 0
                    }
                  </TrackVisibility>
                </h2>
              </div>
              <h4 className="process-card-title">Démarrage du projet</h4>
              <p className="process-card-text">
                Une fois les besoins bien identifiés, nous entamons le travail avec rigueur et professionnalisme.
              </p>
            </div>
          </div>

          {/* Étape 4 */}
          <div className="col-lg-3 col-md-6 process-card-wrap">
            <div className="process-card">
              <div className="process-counter-icon">
                <h2 className="process-counter-number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible ? <CountUp delay={0} start={0} end={4} /> : 0
                    }
                  </TrackVisibility>
                </h2>
              </div>
              <h4 className="process-card-title">Des résultats remarquables</h4>
              <p className="process-card-text">
                Au final, vous serez pleinement satisfaite de la qualité de notre travail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAreaOne;

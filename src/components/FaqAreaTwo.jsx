"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const FaqAreaTwo = () => {
  return (
    <section className="faq-area-2 space">
      <div className="container">
        <div className="row gx-60 flex-row-reverse">
          <div className="col-xl-6">
            <div className="faq-thumb2 mb-xl-0 mb-50">
              <div className="about-counter-grid jump">
                <img
                  src="assets/img/icon/faq2-counter-icon-1.svg"
                  alt="Fixturbo"
                />
                <div className="media-right">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={250} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <h4 className="about-counter-text">Bon service</h4>
                </div>
              </div>
              <img src="assets/img/normal/faq-thumb-2-1.png" alt="Fixturbo" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title">Pourquoi nous choisir?</span>
              <h2 className="sec-title">
                Si vous avez besoin d'un excellent résultat et d'une <br />  bonne qualité, nous sommes là !{" "}
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card style2 active">
                {/*
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    What is the purpose of a business plan?
                  </button>
                </div>
                */}
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Chez SME2D, nous sommes passionnés par notre travail et nous nous engageons à
                      fournir à nos clients les solutions les plus innovantes et les plus durables.
                      Avec notre expertise, notre engagement envers le service à la clientèle et 
                      notre engagement envers la durabilité, nous sommes convaincus que nous pouvons
                      répondre à tous vos besoins en matière d'entreprise de manière efficace et 
                      efficiente. Choisissez SME2D pour vos besoins en matière d'entreprise et 
                      voyez la différence que nous pouvons faire pour votre entreprise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    Découvrir Plus
                  </button>
                </div>
                
               {/*
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Some essential steps to start a business include
                      conducting market research, creating Some essential steps
                      to start a business.
                    </p>
                  </div>
                </div>
                */}
              </div>
              
              {/*
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    How can I protect my intellectual property?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Some essential steps to start a business include
                      conducting market research, creating Some essential steps
                      to start a business.
                    </p>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaTwo;



const WhyChooseUsOne = () => {
  return (
    <div className="wcu-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Notre processus de travail</span>
              <h2 className="sec-title">
                4 étapes faciles pour obtenir les meilleurs résultats{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-40 gx-60 align-items-center">
          <div className="col-xl-4 order-xl-2">
            <div className="wcu-thumb-1">
              <img src="assets/img/normal/wcu-thumb-1-1.png" alt="Fixturbo" />
            </div>
          </div>
          <div className="col-xl-4 col-md-6 order-xl-1">
            <div className="wcu-card-wrap right-wrap">
              <div className="wcu-card">
                <div className="icon">
                  <img src="assets/img/icon/wcu-icon_2-1.svg" alt="Fixturbo" />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Consultez-nous dès maintenant </h4>
                  <p className="wcu-card-text">
                    Prenez contact avec nous pour recevoir un devis gratuit.{" "}
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="icon">
                  <img src="assets/img/icon/wcu-icon_2-2.svg" alt="Fixturbo" />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Connaître vos besoins</h4>
                  <p className="wcu-card-text">
                    Cette étape est primordiale : il est essentiel pour nous de bien cerner ce dont 
                    nous aurons besoin pour concrétiser votre projet.{" "}
                  </p>
                </div>
              </div>
             {/* 
             <div className="wcu-card"> 
                <div className="icon">
                  <img src="assets/img/icon/wcu-icon_2-3.svg" alt="Fixturbo" />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Démarrage du projet</h4>
                  <p className="wcu-card-text">
                    Une fois les besoins bien identifiés, nous entamons le travail avec rigueur et 
                    professionnalisme.{" "}
                  </p>
                </div>
              </div>*/}
            </div>
          </div>
          <div className="col-xl-4 col-md-6 order-xl-3">
            <div className="wcu-card">
              <div className="icon">
                <img src="assets/img/icon/wcu-icon_2-4.svg" alt="Fixturbo" />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Des résultats remarquables</h4>
                <p className="wcu-card-text">
                  Au final, vous serez pleinement satisfait(e) de la qualité de notre travail.{" "}
                </p>
              </div>
            </div>
            
            <div className="wcu-card">
              <div className="icon">
                <img src="assets/img/icon/wcu-icon_2-5.svg" alt="Fixturbo" />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Démarrage du projet</h4>
                <p className="wcu-card-text">
                    Une fois les besoins bien identifiés, nous entamons le travail avec rigueur et 
                    professionnalisme.{" "}
                </p>
              </div>
            </div>
              {/*
            <div className="wcu-card">
              <div className="icon">
                <img src="assets/img/icon/wcu-icon_2-6.svg" alt="Fixturbo" />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Nous commençons le travail</h4>
                <p className="wcu-card-text">
                  après la réalisation de la connaissance des besoins, nous commençons notre 
                  travail{" "}
                </p>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsOne;

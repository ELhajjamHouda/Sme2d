import Link from "next/link";
const HeroTwo = () => {
  return (
    <div
      className="hero-wrapper hero-2"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_2_1_2.png)" }}
    >
      <div className="hero-shape2-1">
        <span className="hero-shape2-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-9 col-lg-10">
            <div className="hero-style2">
              <span className="sub-title text-white">Bienvenue  chez </span>
              <h1 className="hero-title text-white">
                SME2D{" "}
                <span>
                  <img src="assets/img/hero/hero_shape_2.png" alt="sme2d" />
                  {/*Automotive */}
                </span>{" "}
                 {/* Excellence One Repair At Time  */}
              </h1>
              <p className="hero-text text-white">
                SOCIETE MAROCAINE D’EAU ET DE DEVELOPPEMENT DURABLE
              </p> 
              <div className="btn-group">
                <Link href="/about" className="btn">
                  Découvrir plus
                </Link>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/phone-1.svg" alt="sme2d" />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">Demander un appel :</h6>
                    <h4 className="link">
                      <Link className="text-white" href="tel:0523285272">
                        (+212) 523 285 272
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;

import Link from "next/link";

const FooterAreaTwo = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{
        background: "linear-gradient(to bottom, #e6f0ff, #4facfe)", // 🎨 Nouveau dégradé
      }}
    >
      <div className="container">
        {/*
        <div className="footer-top-2">
          <div className="footer-logo">
            <Link href="/">
              <img src="assets/img/logo-white.jpg" alt="Fixturbo" />
            </Link>
          </div>
          <h3 className="footer-top-title text-white">
            Subscribe our newsletter for updates
          </h3>
          <form className="newsletter-form">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Your Email Address"
                required=""
              />
            </div>
            <button type="submit" className="btn">
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
        */}
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">SME2D</h3>
                <p className="footer-text mb-30">
                  Spécialiste dans les technologies de l’eau depuis XXXX, SME2d, vous propose
                   son partenariat tout au long de la réalisation de vos projets de traitement
                    et épuration des eaux ..
                </p>
                <div className="social-btn style3">
                  <Link href="https://www.instagram.com/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link href="https://linkedin.com/" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link href="https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link href="https://facebook.com/" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Liens</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/about">Accueil</Link>
                    </li>
                    <li>
                      <Link href="/team">À propos de nous</Link>
                    </li>
                    <li>
                      <Link href="/contact">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact">xxxxx</Link>
                    </li>
                    <li>
                      <Link href="/contact">Projets</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/service">Épuration Des Eaux Usées</Link>
                    </li>
                    <li>
                      <Link href="/service">Relevage et Pompage des Eaux</Link>
                    </li>
                    <li>
                      <Link href="/service">Traitement de l'air</Link>
                    </li>
                    <li>
                      <Link href="/service">Électricité et Automatisme</Link>
                    </li>
                    <li>
                      <Link href="/service">Service après-vente et exploitation</Link>
                    </li>
                    <li>
                      <Link href="/service">Bureau d’études intégré</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Address</p>
                      <h6>
                        Mohammedia
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Phone Number</p>
                      <h6>
                        <Link href="tel:888123456765">06 61 93 21 62/ 06 61 12 40 40</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Email Address</p>
                      <h6>
                        <Link href="mailto:infoname@mail.com">
                          sme2d .sarl@gmail.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link href="#">SME2D</Link> 2025 | Tous droits réservés
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                {/* <Link href="/contact">Tarms &amp; Condition</Link> */}
                <Link href="/contact">Merci de votre visite et bienvenue à</Link>
                <Link href="/contact">SME2D</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaTwo;

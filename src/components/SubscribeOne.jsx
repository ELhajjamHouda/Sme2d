// Fichier : SubscribeOne.js

import Link from "next/link";

const SubscribeOne = () => {
  return (
    <div className="container">
      <div
        className="footer-top-1 bg-theme" // Le conteneur principal
      >
        {/* Le conteneur du logo a maintenant la classe glassmorphism */}
        <div className="footer-logo glassmorphism">
          <Link href="/">
            <img src="assets/img/logo-white.jpg" alt="sme2d" />
          </Link>
        </div> 

        {/* Le conteneur des numéros a déjà la classe glassmorphism */}
        <div className="call-media-wrap glassmorphism">
          <div className="icon">
            <img src="assets/img/icon/phone-1.svg" alt="sme2d" />
          </div>
          <div className="media-body">
            <h6 className="title text-white">Tell</h6>
            <h4 className="link">
              <a className="text-white" href="tel:0661932162">
                06 61 93 21 62 / 06 61 12 40 40
              </a>
            </h4>
            <h6 className="title text-white">Fax</h6>
            <h4 className="link">
              <a className="text-white" href="tel:0661932162">
                06 61 93 21 62 
              </a>
            </h4>
          </div>
        </div>

        {/* Le conteneur des boutons sociaux a maintenant la classe glassmorphism */}
        <div className="social-btn glassmorphism">
          <a href="https://facebook.com/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://instagram.com/">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeOne;
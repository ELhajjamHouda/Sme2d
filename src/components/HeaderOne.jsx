"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }

    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="nav-header header-layout1">
        {/* Partie top header */}
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href="mailto:sme2d.sarl@gmail.com">
                        sme2d.sarl@gmail.com
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      80 lotiss Al Amane , El Alia - Mohammedia
                    </li>
                    <li>
                      <i className="fas fa-clock" />
                      Lundi - Vendredi
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-auto">
                <div className="header-links ps-0">
                  <ul>
                    <li>
                      <div className="social-links">
                        <Link href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="https://www.twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-auto">
                <div className="header-links ps-0">
                    <ul className="social-icons">
                      <li>
                        <a 
                          href="https://wa.me/212666221689" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="whatsapp-btn"
                        >
                          <i className="fab fa-whatsapp"></i> 
                        </a>
                      </li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Menu */}
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          <div className="menu-area">
            <div className="header-navbar-logo">
              <Link href="/">
                <img src="assets/img/logo.png" alt="sme2d" />
              </Link>
            </div>
            <div className="container">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                <div className="col-auto d-xl-none d-block">
                  <div className="header-logo">
                    <Link href="/">
                      <img src="assets/img/logo.png" alt="sme2d" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link href="/">Accueil</Link>
                      </li>
                      <li>
                        <Link href="/about">À propos de nous</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/service">Nos services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/epuration-des-eaux-usees">
                              Épuration Des Eaux Usées
                            </Link>
                          </li>
                          <li>
                            <Link href="/relevage-et-pompage-des-eaux">
                              Relevage et Pompage des Eaux
                            </Link>
                          </li>
                          <li>
                            <Link href="/traitement-de-l-air">
                              Traitement de l'air
                            </Link>
                          </li>
                          <li>
                            <Link href="/electricite-et-automatisme">
                              Électricité et Automatisme
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-apres-vente-et-exploitation">
                              Service après-vente et exploitation
                            </Link>
                          </li>
                          <li>
                            <Link href="/bureau-d-etudes-integre">
                              Bureau d’études intégré
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/project">Projects</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>

                  {/* Mobile button */}
                  <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                    style={{ color: 'black' }}
                  >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>

                <div className="col-auto ms-auto d-xl-block d-none">
                  <div className="navbar-right-desc">
                    <img src="assets/img/icon/chat.svg" alt="sme2d" />
                    <div className="navbar-right-desc-details">
                      <h6 className="title">Besoin d'aide</h6>
                      <Link className="link" href="tel:+212661932162">
                        (+212) 661 932 162
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === MOBILE MENU === */}
        <div className={`mobile-menu-wrapper ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/img/logo.png" alt="sme2d" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>

            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li>
                  <Link href="/about">À propos de nous</Link>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="/service">Nos services</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/service">Épuration Des Eaux Usées</Link>
                    </li>
                    <li>
                      <Link href="/relevage-et-pompage-des-eaux">
                        Relevage et Pompage des Eaux
                      </Link>
                    </li>
                    <li>
                      <Link href="/traitement-de-l-air">Traitement de l'air</Link>
                    </li>
                    <li>
                      <Link href="/electricite-et-automatisme">
                        Électricité et Automatisme
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-apres-vente-et-exploitation">
                        Service après-vente et exploitation
                      </Link>
                    </li>
                    <li>
                      <Link href="/bureau-d-etudes-integre">
                        Bureau d’études intégré
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/project">Projects</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;

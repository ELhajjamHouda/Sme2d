"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Link from "next/link";
const IntroAreaOne = () => {
  return (
    <div
      className="intro-area-2 bg-overlay-2 space-bottom"
      style={{ backgroundImage: "url(assets/img/service/steel.jpg)" }}
    >
      {/* fact area start */}
      <div className="fact-area">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact-wrap">
                <div className="thumb">
                  <img src="assets/img/fact/1.png" alt="sme2d" />
                </div>
                <div className="details">
                  <h2>
                    Traitement Physico-Chimique
                  </h2>
                  {/* <p>Products In Stock</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact-wrap">
                <div className="thumb">
                  <img src="assets/img/fact/2.png" alt="sme2d" />
                </div>
                <div className="details">
                  <h2>
                    Traitement Biologique
                  </h2>
                  {/* <p>Happy Clients</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact-wrap">
                <div className="thumb">
                  <img src="assets/img/fact/3.png" alt="sme2d" />
                </div>
                <div className="details">
                  <h2>
                    Gestion et Valorisation des Boues
                  </h2>
                  {/* <p>Professional Exparts</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact-wrap">
                <div className="thumb">
                  <img src="assets/img/fact/4.png" alt="sme2d" />
                </div>
                <div className="details">
                  <h2>
                    Traitement des Odeurs
                  </h2>
                  {/* <p>Win Awards</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fact area end */}
    </div>
  );
};

export default IntroAreaOne;

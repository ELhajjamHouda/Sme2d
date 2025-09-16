"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const services = [
  {
    title: "TRAITEMENT DES EAUX",
    imgBg: "assets/img/portfolio/portfolio-1.png",
    icon: "assets/img/icon/service-icon_1-1.svg",
  },
  {
    title: "POMPAGE & RELEVAGE",
    imgBg: "assets/img/portfolio/portfolio-2.png",
    icon: "assets/img/icon/service-icon_1-2.svg",
  },
  {
    title: "ÉPURATION DES EAUX",
    imgBg: "assets/img/portfolio/portfolio-3.png",
    icon: "assets/img/icon/service-icon_1-3.svg",
  },
  {
    title: "Service Après-Vente et Exploitation",
    imgBg: "assets/img/portfolio/portfolio-4.png",
    icon: "assets/img/icon/service-icon_1-3.svg",
  },
  {
    title: "Bureau d’Études Intégré",
    imgBg: "assets/img/portfolio/portfolio-5.png",
    icon: "assets/img/icon/service-icon_1-3.svg",
  },
  {
    title: "Électricité et Automatisme",
    imgBg: "assets/img/portfolio/portfolio-6.png",
    icon: "assets/img/icon/service-icon_1-3.svg",
  },
];

const ServiceAreaTwo = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">nous offrons</span>
              <div className="sec-title-wrapper">
                <h2 className="sec-title">
                  Une Variété de Services de Qualité Vous Attend Chez Nous.
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
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          loop
          autoplay={{
            delay: 3000, // délai entre chaque slide en ms
            disableOnInteraction: false, // continue autoplay même après interaction
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card style2">
                <div
                  className="service-card_content"
                  style={{ backgroundImage: `url(${service.imgBg})` }}
                >
                  <div>
                    <div className="service-card_icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h4 className="service-card_title h5">
                      <Link href="/service-details">{service.title}</Link>
                    </h4>
                    <p className="service-card_text">SME2D</p>
                  </div>
                </div>
                <Link href="/service-details" className="btn style4">
                  En savoir plus <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceAreaTwo;

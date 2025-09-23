'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import Link from "next/link";
const ClientAreaFour = () => {
  return (
    <div className="client-area-3">
      <div className="container">
        <div className="row gx-80 gy-4">
          <div className="col-lg-5">
            <div className="client3-wrap">
              <div className="title-area mb-0">
                <span className="sub-title">Logo Brands &amp; Clients</span>
                <h2 className="sec-title">
                  Non leo libero amet the maecenas gravida
                </h2>
                <p className="sec-text">
                  A car repair is a service provided to fix any issues or
                  damages with a your vehicle. It involves diagnosing the
                  problem, repairing or replacing the necessary parts, and
                  ensuring that the car
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="faq-thumb2 mb-xl-0 mb-50 text-center">
              <img
                src="assets/img/normal/faq-thumb-2-1.png"
                alt="sme2d"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAreaFour;

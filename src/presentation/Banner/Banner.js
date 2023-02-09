import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";

import "./Banner.scss";

const Banner = () => {
  const { t } = useTranslation();
  const slideSettings = {
    autoPlay: true,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    swipeable: false,
    animationHandler: "fade",
    dynamicHeight: false,
    showThumbs: false,
  };
  const slides = [
    {
      title: "Slide 1",
      content: {
        bgImage: "banner1.jpg",
        h3Message: "midSeasonSale",
        h1Message: "up50",
        bttnText: "shopNow",
      },
    },
    {
      title: "Slide 2",
      content: {
        bgImage: "banner2.jpg",
        h3Message: "checkout",
        h1Message: "newCollection",
        bttnText: "shopNow",
      },
    },
  ];

  return (
    <Carousel
      {...slideSettings}
      // autoplay
      // className="slider-area"
      // arrows="false"
      // pause-on-hover="false"
      // fade="true"
      // bulletsOutside="true"
    >
      {slides.map((slide, i) => (
        <div
          className="single-slider bg-img slider-height-2 align-items-center custom-d-flex"
          style={{
            backgroundImage: `url(${require(`../assets/img/${slide?.content?.bgImage}`)})`,
          }}
        >
          <div className="container">
            <div className="row height-100-percent align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="slider-content-8 slider-animated-1 text-center">
                  <h3 className="animated">{t(slide.content.h3Message)}</h3>
                  <h1 className="animated">{t(slide.content.h1Message)}</h1>
                  <div className="slider-btn-1">
                    <Link to="/home" className="animated">
                      {t(slide.content.bttnText)}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;

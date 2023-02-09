import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Banner from "../Banner/Banner";
import BaseMoney from "../components/BaseMoney/BaseMoney";

import Jeans1 from "../assets/img/jeans1.jpg";
import Sho3 from "../assets/img/sho3.jpg";
import Acc from "../assets/img/acc.jpg";
import S3 from "../assets/img/s3.jpg";
import "./Home.scss";

const Home = () => {
  // const router = useRouter();
  // if (window.innerWidth < 990) {
  //   router.replace({
  //     name: "products",
  //     params: { categorySlug: "all" },
  //   });
  // }

  const { t } = useTranslation();

  return (
    <span>
      <Banner />
      <div className="banner-area pt-30">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div
                className="banner-wrap mb-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="banner-img banner-hover banner-zoom">
                  <Link
                    to="/home/w_jeans"
                    // to="{
                    //   //TODO: Change to the proper link with proper categorySlug
                    //   name: 'home',
                    //   //params: { categorySlug: 'accessories' },
                    // }"
                  >
                    <img src={Jeans1} alt="banner" />
                    <div className="banner-content">
                      <h3>{t("w_jeans")}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div
                className="banner-wrap mb-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="banner-img banner-hover banner-zoom">
                  <Link
                    to="/home/sneakers"
                    // :to="{
                    //   //TODO: Change to the proper link with proper categorySlug
                    //   name: 'home',
                    //   //params: { categorySlug: 'accessories' },
                    // }"
                  >
                    <img src={Sho3} alt="banner" />
                    <div className="banner-content">
                      <h3>{t("sneakers")}</h3>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="banner-wrap mb-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="banner-img banner-hover banner-zoom">
                  <Link
                    to="/home/accessories"
                    // :to="{
                    //   //TODO: Change to the proper link with proper categorySlug
                    //   name: 'home',
                    //   //params: { categorySlug: 'accessories' },
                    // }"
                  >
                    <img src={Acc} alt="banner" />
                    <div className="banner-content">
                      <h3>{t("accessories")}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div
                className="banner-wrap mb-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="banner-img banner-hover banner-zoom">
                  <Link
                    to="/home/bathing_suits"
                    // :to="{
                    //   //TODO: Change to the proper link with proper categorySlug
                    //   name: 'home',
                    //   //params: { categorySlug: 'accessories' },
                    // }"
                  >
                    <img src={S3} alt="banner" />
                    <div className="banner-content">
                      <h3>{t("bathing_suits")}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-area pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="service-wrap mb-30 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-icon">
                  <i className="las la-shipping-fast"></i>
                </div>
                <div className="service-content">
                  <h6>{t("free_shipping_head")}</h6>
                  <p>
                    {t("free_shipping_body")}&nbsp;
                    <BaseMoney
                      money={{ centAmount: 10000, fractionDigits: 2 }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="service-wrap mb-30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-icon">
                  <i className="las la-coins"></i>
                </div>
                <div className="service-content">
                  <h6>{t("return_head")}</h6>
                  <p>{t("return_body")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="service-wrap mb-30 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-icon">
                  <i className="las la-headphones"></i>
                </div>
                <div className="service-content">
                  <h6>{t("support_head")}</h6>
                  <p>{t("support_body")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="service-wrap mb-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="service-icon">
                  <i className="las la-shield-alt"></i>
                </div>
                <div className="service-content">
                  <h6>{t("secure_checkout_head")}</h6>
                  <p>{t("secure_checkout_body")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Home;

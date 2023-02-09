import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../presentation/assets/img/logo.svg";
import Payment from "../../presentation/assets/img/payments.png";

import "./Footer.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-area border-top-2 pt-50">
      <div className="footer-top">
        <div className="custom-container">
          <div className="row">
            <div className="footer-column footer-column-1">
              <div className="footer-widget footer-about-2 mb-30">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
                <div className="footer-info">
                  <ul>
                    <li>
                      <Link href="#">+49 (899) 9829960</Link>
                    </li>
                    <li>
                      <Link href="#">info@example.com</Link>
                    </li>
                    <li>PO Box 1622 Colins Street West</li>
                  </ul>
                </div>
                <div className="footer-map">
                  <Link href="contact-us.html">Google maps</Link>
                </div>
              </div>
            </div>
            <div className="footer-column footer-column-2">
              <div className="footer-widget mb-30">
                <div className="widget-title">
                  <h3>{t("company")}</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link href="#">{t("about")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("jobs")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("press")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("contact")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("blog")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column footer-column-3">
              <div className="footer-widget mb-30">
                <div className="widget-title">
                  <h3>{t("community")}</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link href="#">{t("comm_link")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("facebook_group")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("forums")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("meetups")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column footer-column-4">
              <div className="footer-widget mb-30">
                <div className="widget-title">
                  <h3>{t("legal")}</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link href="#">{t("privacy")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("use_terms")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("license")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column footer-column-5">
              <div className="footer-widget mb-30">
                <div className="widget-title">
                  <h3>{t("profile")}</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link href="#">{t("my_account")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("checkout")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("order_tracking")}</Link>
                    </li>
                    <li>
                      <Link href="#">{t("support")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column footer-column-6">
              <div className="footer-widget subscribe-right mb-30">
                <div className="widget-title">
                  <h3>{t("join_newsletter")}</h3>
                </div>
                <div id="mc_embed_signup" className="subscribe-form-2 mt-20">
                  <form className="validate subscribe-form-style" novalidate="">
                    <div id="mc_embed_signup_scroll" className="mc-form-2">
                      <input
                        className="email"
                        type="email"
                        required=""
                        placeholder={`${t("email_placeholder")}`}
                        name="EMAIL"
                        value=""
                      />
                      <div className="mc-news-2" aria-hidden="true">
                        <input
                          type="text"
                          value=""
                          tabindex="-1"
                          name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                        />
                      </div>
                      <div className="clear-2">
                        <input
                          className="button"
                          type="submit"
                          name="subscribe"
                          value={`${t("submit")}`}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-25 pb-15">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="footer-widget copyright-2 text-center">
                <p>© 2020 SUNRISE</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="footer-widget payments-img">
                <Link>
                  <img className="payments" src={Payment} alt="payments" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

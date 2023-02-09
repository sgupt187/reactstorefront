import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LoginButton from "./LoginButton/LoginButton";
import Selector from "./Selector/Selector";
import CategoriesMenu from "../components/CategoriesMenu/CategoriesMenu";
// import useSearch from '../../composition/useSearch';
// import useLocale from '../../composition/useLocale';
// import useLocation from '../../composition/useLocation';
// import useCart from '../../composition/useCart';
// import useMiniCart from "../../composition/useMinicart";
import sunriseConfig from "../../sunrise.config";
// import useAccessRules from '../../composition/useAccessRules';
import Logo from "../assets/img/logo.svg";
import "./Header.scss";

export const Header = ({ open }) => {
  // const locale = useLocale();
  // const location = useLocation();
  // const { cart, exist } = useCart();
  // const { search: s, setSearch } = useSearch();
  const [search, setSearch] = useState(false);
  // const search = shallowRef(s.value);
  // const totalCartItems = useMemo(
  //   () =>
  //     exist.value && cart.value
  //       ? cart.value.lineItems
  //           .map(({ quantity }) => quantity)
  //           .reduce((sum, q) => sum + q, 0)
  //       : 0,
  //   [exist, cart]
  // );
  const totalCartItems = 0;
  const locations = Object.keys(sunriseConfig.countries);
  const locales = Object.keys(sunriseConfig.languages);
  // const { open } = useMiniCart();
  //@todo: what do we do with this one? Do we have to get this every time?
  const { t } = useTranslation();
  // const searchOpen = useRef(false);
  // const mobileMenuOpen = ref(false);

  const toggleSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  // const doSearch = () => {
  //   toggleSearch();
  //   setSearch(search.value);
  // };
  // const { showStoreSelector, showLocationSelector } =
  //   useAccessRules();

  const showStoreSelector = false;
  const showLocationSelector = true;

  return (
    <header className="header-area">
      <div className="main-header-wrap bg-gray">
        <div className="custom-container">
          <div className="header-top pt-10 pb-10">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="header-info header-info-inc">
                  {showStoreSelector && (
                    <Link to="/stores" data-test="stores-link">
                      {t("stores")}
                    </Link>
                  )}
                  <Link to="#">help</Link>
                </div>
              </div>
              <div className="col-sm-6 d-flex justify-content-end">
                <div className="curr-lang-wrap curr-lang-inc">
                  <ul>
                    {showLocationSelector && (
                      <Selector
                        data-test="country-selector-dropdown"
                        values={locations}
                        title="location"
                        // value={location}
                        // setValue={setLocation}
                      />
                    )}
                    <Selector
                      data-test="language-selector-dropdown"
                      values={locales}
                      title="language"
                      // value={locale}
                      // setValue={setLocale}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-header-outer">
          <div className="intelligent-header bg-white">
            <div className="header-middle">
              <div className="custom-container">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-3">
                    <div className="logo">
                      <Link to="/">
                        <img
                          src={Logo}
                          alt="SUNRISE"
                          className="img-responsive sunrise-logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-6 position-static">
                    <div
                      className="
                      main-menu
                      menu-lh-3
                      main-menu-blod main-menu-center
                    "
                    >
                      <CategoriesMenu />
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3">
                    <div className="header-component-wrap">
                      <div className="header-search-2 component-same">
                        <Link
                          onClick={(e) => toggleSearch(e)}
                          className="search-active"
                        >
                          <i className="dl-icon-search10"></i>
                        </Link>
                      </div>
                      <LoginButton />
                      <div className="cart-wrap component-same ml-10">
                        <Link
                          onClick={open}
                          data-test="mini-cart-open-button"
                          className="cart-active"
                        >
                          <i className="dl-icon-cart1"></i>
                          <span className="count-style">{totalCartItems}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-small-mobile">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="mobile-logo logo-width">
                {/* <a href="/">
                <img
                  alt=""
                  :src="
                    require('presentation/assets/img/logo.svg')
                  "
                />
              </a> */}
              </div>
            </div>
            <div className="col-6">
              <div className="mobile-header-right-wrap">
                <div className="same-style cart-wrap">
                  {/* <router-link :to="{ name: 'cart' }">
                  <i className="dl-icon-cart1"></i>
                  <span className="count-style">{{
                    totalCartItems
                  }}</span>
                </router-link> */}
                </div>
                <div className="same-style cart-wrap">
                  {/* <a href="#" className="cart-active">
                  <i className="dl-icon-heart"></i>
                  <span className="count-style">{{
                    totalShoppingCartItems
                  }}</span>
                </a> */}
                </div>
                <div className="mobile-off-canvas">
                  <Link className="mobile-aside-button" to="#">
                    <i className="dl-icon-menu2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`search-content-wrap main-search-active ${
          search ? "search-visible" : ""
        }`}
      >
        <Link onClick={(e) => toggleSearch(e)} className="search-close">
          <i className="dl-icon-close"></i>
        </Link>
        <div className="search-content">
          <form className="search-form">
            <input
              name="q"
              type="text"
              // v-model="search"
              placeholder="Search entire store…"
              // @submit.prevent="doSearch"
            />
            <button
              // @click.prevent="doSearch"
              className="button-search"
            >
              <i className="dl-icon-search10"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

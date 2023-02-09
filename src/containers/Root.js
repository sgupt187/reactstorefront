import React, { useState, useEffect, useRef } from "react";

// import { LOCALE } from '../../../../constants';
// import { LOCATION } from '../../../../constants';
// import { getValue } from '../../../../lib';
// import i18n from '../../../../i18n';
// import useMiniCart from "../composition/useMinicart";
import { Footer } from "../presentation/Footer/Footer";
import { Header } from "../presentation/Header/Header";
import MiniCart from "../presentation/Header/MiniCart/MiniCart";
import Home from "../presentation/Home/Home";
// import useDefaultRouteParams from '../composition/useDefaultRouteParams';
import "./Root.scss";

const Root = () => {
  // const { locale, location, setLocale, setLocation } = useDefaultRouteParams();
  // const { close, isOpen } = useMiniCart();
  // const keyUpListener = useRef((e) => {
  //   if (e.key === "Escape") {
  //     close();
  //   }
  // },[]);
  // const paramsSet = computed(() => getValue(locale) && getValue(location));
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {}, [isOpen]);
  return (
    <div
      className={`main-wrapper main-wrapper-2 main-wrapper-3 ${
        isOpen ? "overlay-active" : ""
      }`}
    >
      <div onClick={close} className="body-overlay"></div>
      <MiniCart isOpen={isOpen} close={close} />
      <Header open={open} />
      <Home />
      <Footer />
    </div>
  );
};

export default Root;

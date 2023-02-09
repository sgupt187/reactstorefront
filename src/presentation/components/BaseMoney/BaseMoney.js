import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// import useLocation from '../../../composition/useLocation';

const BaseMoney = ({ money }) => {
  const { n } = useTranslation();
  // const { location } = useLocation();
  const [amount, setSmount] = useState(0);
  const [formattedMoney, setFormattedMoney] = useState("");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    setSmount(money ? money?.centAmount / 10 ** money?.fractionDigits : 0);
    // setFormattedMoney(`${amount.value}, 'currency', ${location.value}`);
    setFormattedMoney(`${amount}, 'currency'`);
    setCurrency(money?.currencyCode);
  }, [money, amount]);

  return <span data-test="product-original-price">{formattedMoney}</span>;
};

export default BaseMoney;

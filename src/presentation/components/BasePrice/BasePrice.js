import React, { useState, useEffect } from "react";
import BaseMoney from "../BaseMoney/BaseMoney";

import "./style.scss";

const BasePrice = ({ price }) => {
  const [hasDiscount, setHasDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");

  useEffect(() => {
    setHasDiscount(price?.discounted);
    setDiscountedPrice(price?.discounted?.value);
    setOriginalPrice(price?.value);
  }, [price]);

  return (
    <span>
      {!hasDiscount ? (
        <span>
          <BaseMoney money={originalPrice} />
        </span>
      ) : (
        <span v-else>
          <span data-test="price-old-value" className="old-price">
            <BaseMoney money={originalPrice} />
          </span>
          <span data-test="price-new-value" className="new-price">
            <BaseMoney money={discountedPrice} />
          </span>
        </span>
      )}
    </span>
  );
};

export default BasePrice;

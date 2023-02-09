import React from "react";
import { useTranslation } from "react-i18next";
import BasePrice from "../../components/BasePrice/BasePrice";
// import LineItemDeleteForm from ''
// import useMiniCart from "../../../composition/useMinicart";
import useCart from "../../../composition/useCart";
import useCartTools from "../../../composition/useCartTools";

import "./MiniCart.scss";
import { Link } from "react-router-dom";

const MiniCart = ({ isOpen, close }) => {
  // const { close, isOpen } = useMiniCart();
  const { cart, loading, error } = useCart();
  const { cartNotEmpty, productRoute, displayedImageUrl, total, subTotal } =
    useCartTools();
  const { t } = useTranslation();

  return (
    <span>
      <div
        className={`sidebar-cart-active ${isOpen ? "inside" : ""}`}
        data-test="mini-cart-content"
      >
        <div className="sidebar-cart-all">
          <Link
            className="cart-close"
            href="javascript:;"
            onClick={close}
            data-test="mini-cart-close-button"
          >
            <i className="dl-icon-close"></i>
          </Link>
          <div className="cart-content">
            <h3>{t("miniCart")}</h3>
            {cartNotEmpty(cart) && (
              <span>
                <ul>
                  {cart?.lineItems.map((lineItem) => (
                    <li
                      key={lineItem.id}
                      data-test="mini-cart-line-item"
                      className="single-product-cart"
                    >
                      <div className="cart-img">
                        <Link to={productRoute(lineItem)}>
                          <img
                            src={displayedImageUrl(lineItem.variant)}
                            alt={lineItem.name}
                          />
                        </Link>
                      </div>
                      <div className="cart-title">
                        <h4>
                          <Link
                            to={productRoute(lineItem)}
                            data-test="cart-line-item-link"
                          >
                            {lineItem.name}
                            {/* { lineItemAttr(lineItem) } */}
                          </Link>
                        </h4>
                        <span data-test="cart-line-item-quantity">
                          {lineItem.quantity} ×
                          <BasePrice price={total(lineItem)} />
                        </span>
                      </div>
                      {/* <LineItemDeleteForm lineItemId={lineItem.lineId} /> */}
                    </li>
                  ))}
                </ul>
                <div className="cart-total">
                  <h4>
                    {t("subtotal")}:
                    <BasePrice
                      price={subTotal(cart)}
                      data-test="mini-cart-price"
                    />
                  </h4>
                </div>
                <div className="cart-checkout-btn">
                  <Link to="/cart" onClick={close} className="btn-grey">
                    {t("viewBag")}
                  </Link>
                  <Link
                    to="/checkout"
                    data-test="checkout-button"
                    onClick={close}
                  >
                    {t("checkout")}
                  </Link>
                </div>
              </span>
            )}
            {!cartNotEmpty(cart) && (
              <span>
                <h5>{t("emptyCart")}</h5>
              </span>
            )}
          </div>
        </div>
      </div>
    </span>
  );
};

export default MiniCart;

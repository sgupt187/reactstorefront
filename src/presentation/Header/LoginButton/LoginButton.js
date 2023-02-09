import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from 'react-i18next';

// import useCustomerTools from "../../../composition/useCustomerTools";
import "./LoginButton.scss";

const LoginButton = () => {
  // const { t } = useTranslation();
  // const { showLoggedIn } = useCustomerTools();
  const showLoggedIn = false;
  return (
    <div className="header-login component-same ml-10">
      {showLoggedIn ? (
        <span data-test="login-info-name">
          <Link to="/user" data-test="login-info-name">
            <i className="dl-icon-user12"></i>
            {/* <span className="target-text hidden-xs hidden-sm">{{
          t('myAccount')
        }}</span> */}
            <span className="target-text hidden-xs hidden-sm">myAccount</span>
          </Link>
        </span>
      ) : (
        <span data-test="login-button">
          <Link to="login">
            <i className="dl-icon-user12"></i>
            {/* <span className="target-text hidden-xs hidden-sm">{{
          t('signIn')
        }}</span> */}
            <span className="target-text hidden-xs hidden-sm">signIn</span>
          </Link>
        </span>
      )}
    </div>
  );
};

export default LoginButton;

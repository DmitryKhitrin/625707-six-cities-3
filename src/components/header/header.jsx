import React, {memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Header = ({user = {}, isAuthenticated = false}) => {
  const {
    email = ``,
    avatar = ``,
  } = user;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to="/"
              className="header__logo-link header__logo-link--active"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {!isAuthenticated ? (
                  <Link
                    to="/login"
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">
                      Sign in
                    </span>
                  </Link>
                ) : (
                  <Link
                    to="/favorites"
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{
                        backgroundImage: `url(https://htmlacademy-react-3.appspot.com/six-cities${avatar})`,
                        borderRadius: `50px`
                      }}
                    />
                    <span className="header__user-name user__name">
                      {email}
                    </span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

const MemoizedHeader = memo(Header);
export {MemoizedHeader as Header};

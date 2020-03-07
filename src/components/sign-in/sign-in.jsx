import React, {memo, useCallback} from "react";
import PropTypes from "prop-types";
import {withLogin} from "../../hocs/with-login.jsx";
import {Link, useHistory} from "react-router-dom";

const SignIn = ({setCity, handleChange, handleSubmit}) => {
  const history = useHistory();
  const onSubmit = useCallback((evt) => {
    handleSubmit(evt, history);
  }, [handleSubmit, history]);

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={onSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              to="./"
              className="locations__item-link"
              onClick={() => setCity(`Amsterdam`)}
            >
              <span>{`Amsterdam`}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

SignIn.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  setCity: PropTypes.func,
};

export const WrappedSignIn = withLogin(memo(SignIn));
export {WrappedSignIn as SignIn};
export default SignIn;

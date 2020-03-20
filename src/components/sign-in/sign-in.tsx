import React, {FC, memo, useCallback} from "react";
import {Link} from "react-router-dom";

type Props = {
  onSetCity: (T: string) => void;
  handleChange: (T: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (T: React.FormEvent<HTMLFormElement>) => void
}

const SignIn: FC<Props> = ({onSetCity, handleChange, handleSubmit}) => {
  const onSubmit = useCallback((evt) => {
    handleSubmit(evt);
  }, [handleSubmit]);

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
              onClick={() => onSetCity(`Amsterdam`)}
            >
              <span>{`Amsterdam`}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export const WrappedSignIn = memo(SignIn);
export {WrappedSignIn as SignIn};
export {SignIn as TestSignIn};

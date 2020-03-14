import {LOG_IN, LOG_OUT, SET_AUTH_ERROR} from "./types.js";
import {request} from "../../api/config.js";
import {history} from "../../history.js";

export const setLoginParams = ({
  id,
  email,
  name,
  avatar_url: avatar,
  is_pro: isPro
}) => {
  return {
    type: LOG_IN,
    payload: {
      id,
      email,
      name,
      avatar,
      isPro
    }
  };
};

export const logOut = (status) => {
  return {
    type: LOG_OUT,
    payload: status
  };
};

export const setAuthError = (error) => {
  return {
    type: SET_AUTH_ERROR,
    payload: {
      error
    }
  };
};

export const login = (email, password) => (dispatch, _getState, api) => {
  return api
    .post(request.login.get(), {email, password})
    .then((response) => {
      if (response.data) {
        dispatch(setLoginParams(response.data));
        history.push(`/`);
      }
    })
    .catch((error) => {
      const loginError = (error.response && error.response.data) || {};
      dispatch(setAuthError(loginError.error || error.message));
    });
};

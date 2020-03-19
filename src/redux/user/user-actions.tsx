/* eslint-disable camelcase */
import {LOG_IN, LOG_OUT, SET_AUTH_ERROR} from "./types";
import {request} from "../../api/config";
import {RootState} from "../root-reducer";
import {ThunkAction} from "../../utils/types";
import {Action} from "redux";
import {history} from "../../utils/history";

type LoginParams = {
  id: number;
  email: string;
  name: string;
  avatar_url: string;
  is_pro: boolean;
}

export type ParsedLoginParams = {
  id: number | null;
  email: string;
  name: string;
  avatar: string;
  isPro: boolean;
}

type SetLoginParams = {
  type: typeof LOG_IN;
  payload: ParsedLoginParams
}

export const setLoginParams = ({
  id,
  email,
  name,
  avatar_url: avatar,
  is_pro: isPro
}: LoginParams): SetLoginParams => {
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

type LogOut = {
  type: typeof LOG_OUT;
  payload: string;
}

export const logOut = (status: string) => {
  return {
    type: LOG_OUT,
    payload: status
  };
};

type SetAuthError = {
  type: typeof SET_AUTH_ERROR;
  payload: {
    error: string;
  }
}

export const setAuthError = (error: string) => {
  return {
    type: SET_AUTH_ERROR,
    payload: {
      error
    }
  };
};

export const login = (email: string, password: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState, api): Promise<void> => {
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
export type UserAction = LogOut | SetAuthError | SetLoginParams;

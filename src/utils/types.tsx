import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AxiosInstance} from "axios";

export type ThunkAction<R, S, E, A extends Action> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  api: AxiosInstance
) => R;

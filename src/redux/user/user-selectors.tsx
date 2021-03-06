import {RootState} from "../root-reducer";

export const authSelector = (state: RootState) => state.user.authorizationStatus === `AUTH`;
export const userSeletor = (state: RootState) => state.user.user;

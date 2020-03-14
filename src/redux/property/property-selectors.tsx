import {RootState} from "../root-reducer";

export const commentsSelector = (state: RootState) => state.property.comments;
export const formStatusSelector = (state: RootState) => state.property.isFormSending;
export const nearbySelector = (state: RootState) => state.property.nearby;
export const choosedSelector = (state: RootState) => state.property.choosed;

import {useEffect} from "react";

export const useMountEffect = (effectCallback) => {
  useEffect(effectCallback, []);
};

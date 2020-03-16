import {useHistory} from "react-router-dom";

export const useRedirect = (path: string) => {
  const history = useHistory();
  history.push(path);
};

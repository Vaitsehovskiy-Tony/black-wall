import { useContext } from "react";
import useFetch from "../hooks/Fetch";
import { DataContext } from "../utils/getContext";

const MainApi = (url, contextElement, staticData) => {
  // debugger
  // console.log(DataContext)
  // const appData = useContext(DataContext);
  // const { error, data } = useFetch(url);
  // console.log(appData)

  // if (!!appData && appData[contextElement] && !!appData[contextElement].apiData) {
  //   return;
  // }

  let apiData = false;
  // if (!!data && !error) {
  //   apiData = true;
  //   return data;
  // } else if (!!error && !data) {
    return [staticData, apiData];
  // }
}

export default MainApi;

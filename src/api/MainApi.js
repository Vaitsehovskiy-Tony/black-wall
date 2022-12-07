import useFetch from "../hooks/useFetch";

function MainApi(url) {
  const { error, data } = useFetch(url);

  // if (!!loading & !error)
  // {   return ( <h1>Loading...</h1>)
  // }

  if (!!error || !data) {
    console.error("error", error, data);
  }

  return data;
}

export default MainApi;

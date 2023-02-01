import { useQuery } from "react-query";
import { makeInstagramFetch } from "../services/instagram.service";

export const useInstagram = () => {
  // debugger

  const { isLoading, data, status, error } = useQuery("response",
    makeInstagramFetch,
    {
      keepPreviousData: true,
    }
  );
    
  let res = null;

  if (status === "success") {
    res = data;
  }

  if (status === "error") {
    console.log(error)
  }

  return { isLoading, res };
};

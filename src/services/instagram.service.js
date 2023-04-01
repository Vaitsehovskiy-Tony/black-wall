import axios from "axios";
const fetchMediaFields = (accessToken, fields) => {
  
  const params = new URLSearchParams();
  const token = "IGQVJVcnZAPWWs2dHhONF92YVZA3WFA5cG54c0YyTjNfVXFzSVRBa2VCTlBfaGxNRjhhVkdZASXJ4cXRfb2lWQ3hNcHloc3pfV3ZAxa0ppbWhwT3B3QjZAXNzdGdlg3YjZABcEtZAeW5RVEZArT1pXaXJIYmw0SgZDZD";

  params.append("access_token", token);
  params.append("fields", ["media_url", "permalink", "media_type"].join(","));

  return axios
    .get("https://graph.instagram.com/me/media", { params: params })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const makeInstagramFetch = async () => {
  const token = "IGQVJVcnZAPWWs2dHhONF92YVZA3WFA5cG54c0YyTjNfVXFzSVRBa2VCTlBfaGxNRjhhVkdZASXJ4cXRfb2lWQ3hNcHloc3pfV3ZAxa0ppbWhwT3B3QjZAXNzdGdlg3YjZABcEtZAeW5RVEZArT1pXaXJIYmw0SgZDZD";
  const requestOptions = {
    method: "get",
    headers: {
        "Content-Type": "application/json"
    },
    redirect: "follow",
  };

  const inst = await fetchMediaFields();

  // fetch(
  //   "https://v1.nocodeapi.com/tonyvaits/instagram/kkcoNxSVssSmoysI",
  //   requestOptions
  // )
  //   .then((response) => response.json())
  //   .catch((error) => console.error("error", error));

    return inst;
};

export const getPhotos = (arr) => {
  if (!arr) {
    return null;
  }
  let photosArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].media_type === "CAROUSEL_ALBUM" || arr[i].media_type === "IMAGE") {
      photosArray.push(arr[i].media_url);
    }
  }


  return photosArray;
};

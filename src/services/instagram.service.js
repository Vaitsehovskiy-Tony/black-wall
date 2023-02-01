import axios from "axios";
const fetchMediaFields = (accessToken, fields) => {
  
  const params = new URLSearchParams();
  const token = "IGQVJXS1lVemVsdkhYM19oaUlsOE56TzdydHMyTVlNWnVXWkRGMmpCc2IzbW9ncWYyNVZAkQVNqbXZAibzdjTThMbEIwbjVDSnNKYm9mQjhyLW4zN2RaLTJoVmZAkWUpwVExOcTA3eE5PWF92bmt1Qmd1XwZDZD";

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
  const token = "IGQVJXS1lVemVsdkhYM19oaUlsOE56TzdydHMyTVlNWnVXWkRGMmpCc2IzbW9ncWYyNVZAkQVNqbXZAibzdjTThMbEIwbjVDSnNKYm9mQjhyLW4zN2RaLTJoVmZAkWUpwVExOcTA3eE5PWF92bmt1Qmd1XwZDZD";
  const requestOptions = {
    method: "get",
    headers: {
        "Content-Type": "application/json"
    },
    redirect: "follow",
  };

  const inst = await fetchMediaFields();
  console.log(inst)
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

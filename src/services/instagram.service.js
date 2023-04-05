import axios from "axios";
const fetchMediaFields = (accessToken, fields) => {
  const params = new URLSearchParams();
  const token =
    "IGQVJVZAWttZA3gzeHJOaHZAmWkVHdDJ6cFF6SEVZAWFVPaDdGLWhUTFBjbmY5a1Y5YUJpbXNjTGVDTXlxZATF1NUlYRUdDNWRmeDZAhcWF6TkVDSnZAZAemZAueGYxeUI1eUdXZAVNSVFJhZAjloZATh6cnRfUGZACVQZDZD";

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
  const token =
    "IGQVJVZAWttZA3gzeHJOaHZAmWkVHdDJ6cFF6SEVZAWFVPaDdGLWhUTFBjbmY5a1Y5YUJpbXNjTGVDTXlxZATF1NUlYRUdDNWRmeDZAhcWF6TkVDSnZAZAemZAueGYxeUI1eUdXZAVNSVFJhZAjloZATh6cnRfUGZACVQZDZD";
  const requestOptions = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const inst = await fetchMediaFields();
  return inst;
};

export const getPhotos = (arr) => {
  if (!arr) {
    return null;
  }
  let photosArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].media_type === "CAROUSEL_ALBUM" ||
      arr[i].media_type === "IMAGE"
    ) {
      photosArray.push(arr[i].media_url);
    }
  }

  return photosArray;
};

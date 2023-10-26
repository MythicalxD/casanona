import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getYoutube = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL}/api/you-tube?populate=*`,
    options
  );
  const data = await res.json();

  return data.data;
};

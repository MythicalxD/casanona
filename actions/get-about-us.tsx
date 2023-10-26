import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getAboutUs = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL}/api/about-us?populate=*`,
    options
  );
  const data = await res.json();

  return data;
};

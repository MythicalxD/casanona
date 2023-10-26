import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getArrivals = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(`${API_URL}/api/new-products?populate=*`, options);
  const data = await res.json();

  return data.data;
};

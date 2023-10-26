import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getFilters = async (type: string, value: string) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL}/api/products?populate=*&filters[${type}][name][$contains]=${value}`,
    options
  );
  const data = await res.json();

  return data.data;
};

import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getFilters = async (keyword: string) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL}/api/products?populate=*&filters[slug][$contains]=${keyword}&pagination[pageSize]=100`,
    options
  );
  const data = await res.json();

  return data.data;
};

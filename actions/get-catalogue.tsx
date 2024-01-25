import { API_URL, API_URL_IMAGE, STRAPI_API_TOKEN } from "../utils/urls";

export const getCatalogue = async (keyword: String) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL_IMAGE}/api/catalogues?populate[0]=images&filters[tags][$contains]=${keyword}`,
    options
  );
  const data = await res.json();

  return data.data;
};

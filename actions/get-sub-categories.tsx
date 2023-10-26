import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getSubCategories = async (id: string, page: string) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL}/api/sub-categories?filters[id]=${id}&populate[products][populate]=*&pagination[pageSize]=30&pagination[page]=${page}`,
    options
  );
  const data = await res.json();

  return data.data;
};

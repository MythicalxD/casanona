import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getColors = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL}/api/colors`,
    options
  );
  const data = await res.json();

  return data.data;
};
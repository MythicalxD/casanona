import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getFabrics = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL}/api/fabrics`,
    options
  );
  const data = await res.json();

  return data.data;
};

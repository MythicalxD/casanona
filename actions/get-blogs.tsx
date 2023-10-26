import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getBlogs = async (endpoint: string) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL}/api/blogs/${endpoint}?populate=*`,
    options
  );
  const data = await res.json();

  return data;
};

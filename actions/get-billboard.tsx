import { API_URL, API_URL_IMAGE, STRAPI_API_TOKEN } from "../utils/urls";

export const getBillboards = async (endpoint: string) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(
    `${API_URL}/api/billboards/${endpoint}?populate=*`,
    options
  );
  const data = await res.json();

  const url =
    API_URL_IMAGE +
    data.data.attributes.images.data[0].attributes.formats.large.url;

  return url;
};
